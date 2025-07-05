const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('../Models/User');
const jwt = require('jsonwebtoken');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails[0].value;
        const name = profile.displayName;
        
        let user = await UserModel.findOne({ email });
        
        if (!user) {
            // Create new user if doesn't exist
            user = new UserModel({
                name,
                email,
                password: 'google-auth' // We won't use password for Google auth users
            });
            await user.save();
        }
        
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));

const googleAuth = passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
});

const googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', { session: false }, (err, user, info) => {
        if (err) {
            return res.redirect('/login?error=auth_failed');
        }
        if (!user) {
            return res.redirect('/login?error=no_user');
        }
        
        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        // Redirect to frontend with token
        res.redirect(`${process.env.FRONTEND_URL}/auth/google/callback?token=${jwtToken}&name=${user.name}&email=${user.email}&_id=${user._id}`);
    })(req, res, next);
};

module.exports = {
    googleAuth,
    googleAuthCallback
};