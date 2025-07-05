import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import qrCode from "../assets/giveindia-qr.png";
import donationLogo from "../assets/donationLogo.jpg"; 

const SOCIAL_LINKS = {
  facebook: "https://facebook.com/giveindia",
  instagram: "https://instagram.com/giveindia",
  twitter: "https://twitter.com/giveindia",
  youtube: "https://youtube.com/giveindia",
  donate: "https://giveindia.org/donate",
};

function TopBar() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDonateClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
          }}
        >
          {/* Left side - Contact Info */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <PhoneIcon fontSize="small" />
              +91 12345-67890
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <EmailIcon fontSize="small" />
              contact@giveindia.org
            </Typography>
          </Box>

          {/* Right side - Social Media and Donate Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              aria-label="Facebook"
              color="primary"
              size="small"
              onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="primary"
              size="small"
              onClick={() => window.open(SOCIAL_LINKS.instagram, "_blank")}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="primary"
              size="small"
              onClick={() => window.open(SOCIAL_LINKS.twitter, "_blank")}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="YouTube"
              color="primary"
              size="small"
              onClick={() => window.open(SOCIAL_LINKS.youtube, "_blank")}
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{
                marginLeft: "8px",
                backgroundColor: "rgb(39, 165, 39)",
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "#e64a19",
                },
              }}
              onClick={handleDonateClick}
            >
              Donate Now
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Donation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth={true}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: "400px", 
            padding: "20px",
            borderRadius: "12px",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ textAlign: "center" }}>
          
          {/* "We are supporting" text */}
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              mt: 1,
              fontSize: "1.5rem",
              fontWeight: 700, 
              color: "rgb(38, 134, 224)",
              fontFamily: '"Cabin", sans-serif',
              fontOpticalSizing: "auto",
              fontVariationSettings: '"wdth" 100',
              fontStyle: "normal",
            }}
          >
            WE ARE SUPPORTING
          </Typography>

          {/* Donation logo */}
          <Box sx={{ mb: 3 }}>
            <img
              src={donationLogo}
              alt="Donation Logo"
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* "Scan to Donate" text */}
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              mt: 5,
              fontSize: "1.1rem",
              fontWeight: 700, 
              color: "rgb(38, 134, 224)",
              fontFamily: '"Cabin", sans-serif',
              fontOpticalSizing: "auto",
              fontVariationSettings: '"wdth" 100',
              fontStyle: "normal",
            }}
          >
            SCAN TO DONATE
          </Typography>

          {/* QR Code */}
          <Box sx={{ mb: 3 }}>
            <img
              src={qrCode}
              alt="Donation QR Code"
              style={{
                width: "250px",
                height: "250px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
              }}
            />
          </Box>

          {/* Bottom text */}
          <Typography
            variant="body1"
            sx={{
              mt: 5,
              fontSize: "1.3rem",
              fontWeight: 400, 
              color: "rgb(38, 134, 224)",
              fontFamily: '"Cabin", sans-serif',
              fontOpticalSizing: "auto",
              fontVariationSettings: '"wdth" 100',
              fontStyle: "normal",
            }}
          >
            You can help prevent
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontSize: "1.3rem",
              fontWeight: 400, 
              color: "rgb(38, 134, 224)",
              fontFamily: '"Cabin", sans-serif',
              fontOpticalSizing: "auto",
              fontVariationSettings: '"wdth" 100',
              fontStyle: "normal",
            }}
          >
            Youth Homelessness
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            onClick={() => {
              handleCloseDialog();
              window.open(SOCIAL_LINKS.donate, "_blank");
            }}
            color="primary"
            variant="contained"
            sx={{
              backgroundColor: "rgb(55, 136, 230)",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgb(27, 110, 204)",
                boxShadow: "none",
              },
            }}
          >
            Visit Donation Page
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default TopBar;
