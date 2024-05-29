import Image from "next/image";
import React from "react";

export default function FormMainContent(){
    return(
        <form className="space-y-20">
            <div className="relative">
                <Image
                    className="absolute left-4 top-3.5"
                    width={40}
                    height={40}
                    src={"/Images/airplane-icon.svg"}
                    alt="Logo"
                />
                <input placeholder="Search Airport" type="text" name="airport" id="airport" className="mt-1 bg-neutral-100 p-4 pl-16 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    <Image
                        className="absolute left-4 top-3.5"
                        width={40}
                        height={40}
                        src={"/Images/calendar.svg"}
                        alt="Logo"
                    />
                    <input placeholder="Park from" type="date" id="park-from" className="mt-1 p-4 pl-16 block w-full bg-neutral-100 rounded-full shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div className="relative">
                    <Image
                        className="absolute left-4 top-3.5"
                        width={40}
                        height={40}
                        src={"/Images/clock-icon.svg"}
                        alt="Logo"
                    />
                    <input type="time" placeholder="Hour" name="Hour" id="park-until" className="mt-1 pl-16 p-4 block w-full bg-neutral-100 rounded-full shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    <Image
                        className="absolute left-4 top-3.5"
                        width={40}
                        height={40}
                        src={"/Images/calendar.svg"}
                        alt="Logo"
                    />
                    <input type="date" placeholder="Park until" name="park-from" id="park-from" className="mt-1 p-4  pl-16 block w-full bg-neutral-100 rounded-full shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div className="relative">
                    <Image
                        className="absolute left-4 top-3.5"
                        width={40}
                        height={40}
                        src={"/Images/clock-icon.svg"}
                        alt="Logo"
                    />
                    <input type="time" placeholder="Hour" name="park-until" id="park-until" className="mt-1 p-4 pl-16 block w-full bg-neutral-100 rounded-full shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
            </div>
            <div>
                <div className="relative">
                    <Image
                        className="absolute left-4 top-2"
                        width={40}
                        height={40}
                        src={"/Images/car-icon.svg"}
                        alt="Logo"
                    />
                    <select id="car-type" name="car-type" className="mt-1 pl-16 p-4 block w-full bg-neutral-100 shadow-sm rounded-full focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                        <option value="">Passenger Car</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="relative">
                    <Image
                        className="absolute left-4 top-2"
                        width={40}
                        height={40}
                        src={"/Images/terminal-icon.svg"}
                        alt="Logo"
                    />

                    <select id="terminals" name="terminals" className="mt-1 pl-16 p-4 block w-full bg-neutral-100 shadow-sm rounded-full focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                        <option value="">All terminals</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="inline-flex items-center px-16 py-4 border border-transparent rounded-full shadow-sm text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Search Parking Slot
                </button>
            </div>
        </form>
    )
}