import React from "react";
import Image from "next/image";

export default function MainMenu({
    children,
                                 }:{
    children: React.ReactNode;
}) {
    return (
        <div className="main-menu-container relative">
            <svg
                className="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#2083d1"
                    fillOpacity="1"
                    d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,202.7C840,224,960,256,1080,272C1200,288,1320,288,1380,288L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
            </svg>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-7xl mx-auto px-4 py-8 relative z-10">
                <div className="rating-section rounded-lg p-6">
                    <h2 className="text-4xl font-semibold mb-4 text-white">Find airport parking with <br/> Vliegen en Parkeren</h2>
                    <Image
                        width={180}
                        height={180}
                        src={"/Images/ratings.svg"}
                        alt="Logo"
                    />
                    <div className="mt-100">
                        <div className="flex items-center">
                            <Image
                                className="mr-3 bg-blue-100 p-2 rounded-2xl"
                                width={70}
                                height={40}
                                src={"/Images/money-icon.svg"}
                                alt="Logo"
                            />
                            <p className="text-2xl">Always the <span className="text-blue-500">best price</span></p>
                        </div>
                        <div className="flex items-center mt-6">
                            <Image
                                className="mr-3 bg-blue-100 p-2 rounded-2xl"
                                width={70}
                                height={40}
                                src={"/Images/time-icon.svg"}
                                alt="Logo"
                            />
                            <p className="text-2xl">Book in <span className="text-blue-500">2 minutes</span></p>
                        </div>
                        <div className="flex items-center mt-6">
                            <Image
                                className="mr-3 bg-blue-100 p-2 rounded-2xl"
                                width={70}
                                height={40}
                                src={"/Images/booking-icon.svg"}
                                alt="Logo"
                            />
                            <p className="text-2xl"><span className="text-blue-500">No </span> booking fees</p>
                        </div>
                    </div>
                </div>

                {/*Form*/}
                <div className="form-section bg-white rounded-xl shadow-lg p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
