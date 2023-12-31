'use client'
import React, {useEffect, useRef, useState} from "react";
import 'swiper/css'
import Canvas from "@/components/Canvas/Canvas";

export default function Team(props) {

    return (
        <div className="team pt-24 flex justify-end font-grotesk-light">
            <div className="w-full testik relative h-screen">
                <h2 className="text-6xl max-w-screen-xl mx-auto leading-[5.5rem] text-white opacity-90">Команда</h2>
                   <Canvas />
            </div>
        </div>

    );
}