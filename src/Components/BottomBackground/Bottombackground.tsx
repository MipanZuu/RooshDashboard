import Image from "next/image";
import React from "react";

export default function BottomBackground(){
    return(
        <div className="relative flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src="/Images/homepage-illustration.svg"
                    alt="Homepage Illustration"
                    layout="intrinsic"
                    width={2600}
                    height={1600}
                    className="max-w-full max-h-full"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    width={80}
                    height={80}
                    src="/Images/arrow-icon.svg"
                    alt="Arrow Icon"
                />
            </div>
        </div>
    )
}
