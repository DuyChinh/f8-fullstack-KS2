"use client"
// import { useEffect, useState } from "react";
import "./DevMode.css";
import { Button } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  useColorScheme,
} from "@mui/material/styles";

function DevMode() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button className="btn-mode"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? <FaSun/> : <FaMoon/>}
    </Button>
  );
}

 

export default DevMode;