import React from 'react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Microphone from '../components/Microphone';
import { ToastContainer } from 'react-toastify';

function Page01() {
    return (
        <div className="min-h-screen bg-gray-50">
            
            
            <div className="pt-20 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Welcome, Champ
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Complete your emotional intelligence assessment with voice interaction
                        </p>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <Microphone />
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Page01;