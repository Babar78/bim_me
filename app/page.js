'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LoadingBackdrop from "@/components/LoadingBackdrop";

const gerenationOptions = [
  { label: 'Mountains', value: 'mountains' },
  { label: 'Desert', value: 'desert' },
  { label: 'Forests', value: 'forests' },
];

export default function Home() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingBackdrop loading={loading} />
      <main className="bg-black h-screen flex flex-col w-full">
        <Navbar />
        <div className="flex-1 h-full flex justify-center items-center z-10">
          <div className="h-fit text-center max-w-[1000px] flex flex-col justify-between min-h-[500px] px-2">
            <div>
              <h1 className="text-5xl text-gradient font-extrabold">Unlock Infinite Horizons <br /></h1>
              <p className="text-white text-[24px] md:block hidden">
                Craft unique landscapes from mountains to valleys with our procedural generation. <br />Unleash creativity, discover new worlds.
              </p>
              <Autocomplete
                disablePortal
                id="gerenation-option"
                className="p-3 rounded-lg mx-auto md:w-1/2 w-full mt-5"
                defaultValue={gerenationOptions[0].label}
                options={gerenationOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} className="bg-gray-100 rounded-lg" />}
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-5 items-center">
              <input placeholder="Enter Prompt Here!" className="bg-gray-100 p-3 rounded-lg md:flex-1 w-full focus:outline-secondary" />
              <Button variant="contained" color="primary" className="bg-gradientPattern rounded-lg w-fit h-[48px]">Generate &nbsp; <AutoAwesomeIcon fontSize="16" /></Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
