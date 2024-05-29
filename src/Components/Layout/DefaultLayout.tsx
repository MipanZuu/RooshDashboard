"use client";

import Header from "@/Components/Header/Header";
import React, {useState} from "react";
import MainMenu from "@/Components/Main/Mainmenu";
import FormMainContent from "@/Components/FormMainContent/FormMainContent";
import Image from "next/image";
import BottomBackground from "@/Components/BottomBackground/Bottombackground";

export default function DefaultLayout(){
    return (
        <>
            <div className="layout">
                <Header />
                <MainMenu>
                    <FormMainContent/>
                </MainMenu>
                <BottomBackground />
            </div>
        </>
    )
}