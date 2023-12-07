"use client"
import "./Loading.css";
import { useEffect, useState } from "react";
const Loading =() => {
    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    if(isloading) {
        return <span class="loader"></span>;
    }
   
}

export default Loading