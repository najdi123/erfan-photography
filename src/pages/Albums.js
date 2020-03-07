import React from 'react';
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Albums = () => {
    return (
        <div>
            <Navbar />

            <Gallery/>
            <Footer/>
        </div>
    );
};

export default Albums;