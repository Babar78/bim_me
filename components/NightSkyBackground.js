// NightSkyBackground.js

import React, { useEffect } from 'react';

const NightSkyBackground = () => {
    useEffect(() => {
        // Load the Night Sky script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='h-screen w-screen absolute -z-1'>
            <night-sky
                id="nightSky"
                layers="4"
                density="30"
                velocity-x="60"
                velocity-y="60"
                star-color="#FFF"
                background-color="transparent"
            ></night-sky>
        </div>
    );
};

export default NightSkyBackground;
