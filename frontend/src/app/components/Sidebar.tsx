"use client";
import React from 'react'
import Image from 'next/image';
import IkeaLogo from "../../../assets/ikea.png";
import { GoSidebarCollapse } from "react-icons/go";
import StationLogo from "../../../assets/company.png";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { GiCrimeSceneTape } from "react-icons/gi";
import { CiMoneyBill } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";

export const Sidebar = () => {
    return (
        <div className='w-full hidden md:max-w-[400px] md:flex flex-col'>

            <div className='flex flex-row justify-between items-center w-full  sm:max-w-[350px]  md:max-w-[400px]'>
                <Image src={IkeaLogo} alt='core-logo' className='h-16 w-36 cursor-pointer ' />

                <GoSidebarCollapse size={36} />


            </div>
            <hr className='mt-6' />

            <div>

                <div className='bg-gray-200 h-[100px] p-6 mt-6 gap-6 flex flex-row justify-between items-center rounded-xl shadow-xl'>

                    <div className='flex flex-row items-center gap-4'>


                        <Image src={StationLogo} alt='logo' className='h-full w-24' />

                        <div className='flex flex-col'>
                            <h2 className='font-bold text-xl'>Rocks Company</h2>
                            <p className='text-gray-400'>Team - 20 Members</p>


                        </div>
                    </div>
                    <div>
                        <FaExpandArrowsAlt size={24} className='cursor-pointer' onClick={() => alert("Namaskar")} />

                    </div>


                </div>
            </div>

            <div className='p-6 flex flex-col gap-6
        '>

                <p className='text-gray-400'>Main Menu</p>


                <ul className='w-full flex flex-col'>
                    <li className='flex flex-row gap-4 p-4 items-center hover:bg-purple-50 hover:border-l-4 cursor-pointer hover:border-purple-600 hover:text-purple-700'> <BiSolidDashboard size={24} className='hover:text-purple-600' />
                        <p className='text-gray-400 text-xl hover:text-purple-600'>Dashboard</p></li>
                    <li className='flex flex-row gap-4 p-4 items-center hover:bg-purple-50 hover:border-l-4 cursor-pointer hover:border-purple-600 hover:text-purple-700'> <IoMdPeople size={24} className='hover:text-purple-600' />
                        <p className='text-gray-400 text-xl hover:text-purple-600'>Team</p></li>
                    <li className='flex flex-row gap-4 p-4 items-center hover:bg-purple-50 hover:border-l-4 cursor-pointer hover:border-purple-600 hover:text-purple-700'> <GiCrimeSceneTape size={24} className='hover:text-purple-600' />
                        <p className='text-gray-400 text-xl hover:text-purple-600'>Crimes and Cases</p></li>
                    <li className='flex flex-row gap-4 p-4 items-center hover:bg-purple-50 hover:border-l-4 cursor-pointer hover:border-purple-600 hover:text-purple-700'> <CiMoneyBill size={24} className='hover:text-purple-600' />
                        <p className='text-gray-400 text-xl hover:text-purple-600'>Finance</p></li>
                    <li className='flex flex-row gap-4 p-4 items-center hover:bg-purple-50 hover:border-l-4 cursor-pointer hover:border-purple-600 hover:text-purple-700'> <GrSchedulePlay size={24} className='hover:text-purple-600' />
                        <p className='text-gray-400 text-xl hover:text-purple-600'>Dashboard</p></li>


                </ul>

            </div>


        </div>
    )
}
