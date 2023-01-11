import React from "react";

export default function Homepage() {
    return (
        <div className="relative bg-orange-100/90">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-center py-6 md:justify-start md:space-x-10">
                    <div className="inline-flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/images/LOGO KUMA.png"
                                alt=""
                            />
                        </a>
                        <div className="inline-flex justify-center space-x-10 md:flex-1">
                            <a
                                href="#"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Contact Us
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Dokumentasi
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                List Event
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-3 p-10">
                    <h1 className="text-8xl pl-10 font-bold">
                        Selamat Datang Di Kuma Clan
                    </h1>
                    <div className="py-10">
                        <form action="#">
                            <div className="pl-10">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white p-2 shadow-md hover:bg-red-800/90 "
                                >
                                    Join Us
                                </button>
                                <input
                                    type="email"
                                    placeholder="Masukan Alamat Email"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="max-w-max px-6 pl-10">
                        <div className="border border-white bg-white py-1 md:space-x-10">
                            <div className="inline-flex justify-start space-x-10 md:flex-1">
                                <p className="text-base font-medium text-gray-500 hover:text-gray-900 pl-10">
                                    Instagram
                                </p>
                                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Facebook
                                </a>
                                <a className="text-base font-medium text-gray-500 hover:text-gray-900 pr-10">
                                    Tiktok
                                </a>
                            </div>
                            <div className="space-x-10">
                                <div className="inline-flex space-x-5">
                                    <a href="https://www.instagram.com/kumaclan/">
                                        <span className="sr-only">
                                            Your Company
                                        </span>
                                        <img
                                            src="/socmed/Instagram.png"
                                            alt=""
                                            width="80px"
                                        />
                                    </a>
                                    <a href="https://www.facebook.com/kumaclan/">
                                        <span className="sr-only">
                                            Your Company
                                        </span>
                                        <img
                                            src="/socmed/FaceBook.png"
                                            alt=""
                                            width="80px"
                                        />
                                    </a>
                                    <a href="https://www.tiktok.com/@kumaclan">
                                        <span className="sr-only">
                                            Your Company
                                        </span>
                                        <img
                                            src="/socmed/Tiktok.png"
                                            alt=""
                                            width="80px"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900 pl-10">
                            Support By :
                        </a>
                        <a href="#">
                            <span className="sr-only pl-10">Your Company</span>
                            <img
                                className="pl-10 w-1/5"
                                src="/images/Logo Arata.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="col-span-1">
                    <img className="p-10" src="/images/Kuma Chan.png" alt="" />
                </div>
            </div>
        </div>
    );
}
