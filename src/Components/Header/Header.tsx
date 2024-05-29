import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = (props: {

}) => {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-6 md:px-6 2xl:px-11 mx-auto bg-roosh">
                <Link className="block flex-shrink-0" href="/">
                    <Image
                        width={180}
                        height={180}
                        src={"/Images/logo.svg"}
                        alt="Logo"
                    />
                </Link>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <div className="flex items-center gap-3 2xsm:gap-7 pr-12">
                    <ul className="flex items-center gap-10 2xsm:gap-4">
                        <div className="hidden sm:block">
                            <div className="relative text-white">
                                <h1> Airports </h1>
                            </div>
                        </div>
                    </ul>

                    <ul className="flex items-center gap-10 2xsm:gap-4">
                        <div className="hidden sm:block">
                            <div className="relative text-white">
                                <h1> Parking types </h1>
                            </div>
                        </div>
                    </ul>

                    <ul className="flex items-center gap-10 2xsm:gap-4">
                        <div className="hidden sm:block">
                            <div className="relative text-white">
                                <h1> Blog </h1>
                            </div>
                        </div>
                    </ul>

                    <ul className="flex items-center gap-10 2xsm:gap-4">
                        <div className="hidden sm:block">
                            <div className="relative text-white flex items-center">
                                <h1>Help</h1>
                                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                            </div>
                        </div>
                    </ul>
                    </div>

                    <ul className="flex items-center gap-10 2xsm:gap-0">
                        <div className="hidden sm:block">
                            <Image
                                width={40}
                                height={40}
                                src={"/Images/login-icon.svg"}
                                alt="Country Icon"
                            />
                        </div>
                    </ul>

                    <ul className="flex items-center gap-10 2xsm:gap-4">
                        <div className="hidden sm:flex items-center">
                            <Image
                                width={40}
                                height={40}
                                src="/Images/country-icon.svg"
                                alt="Country Icon"
                            />
                            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-white" />
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
