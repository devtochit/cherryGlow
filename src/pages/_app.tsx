import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]' >
            <NavBar />
            <div className='flex gap-6 md:gap-20'>
                <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
                    <SideBar />
                </div>
                <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
                    <Component {...pageProps} />

                </div>
            </div>
        </div>
    )
}

export default MyApp





