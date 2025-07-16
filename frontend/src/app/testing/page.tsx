"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const individuals = [
        {
            id: 1,
            name: "Ravi Sharma",
            age: 29,
            gender: "Male",
            email: "ravi.sharma@example.com",
            phone: "+91-9876543210",
            address: "123 MG Road, Bengaluru, Karnataka",
            image: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            id: 2,
            name: "Priya Mehta",
            age: 26,
            gender: "Female",
            email: "priya.mehta@example.com",
            phone: "+91-9123456780",
            address: "45 Nehru Street, Mumbai, Maharashtra",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            id: 3,
            name: "Arjun Verma",
            age: 34,
            gender: "Male",
            email: "arjun.verma@example.com",
            phone: "+91-9988776655",
            address: "78 GT Road, Delhi",
            image: "https://randomuser.me/api/portraits/men/82.jpg"
        },
        {
            id: 4,
            name: "Neha Kapoor",
            age: 31,
            gender: "Female",
            email: "neha.kapoor@example.com",
            phone: "+91-8844221133",
            address: "321 Park Lane, Chandigarh",
            image: "https://randomuser.me/api/portraits/women/48.jpg"
        }
    ];

    return (
        <div>
            <div className='flex flex-row gap-5 p-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-center p-2 rounded-lg bg-blue-200 '>
                        <p className='font-bold text-2xl'>Top Level</p>
                    </div>

                    {individuals.map((individual) => (
                        <div key={individual.id}>
                            <div className='flex flex-col p-4 border-1 gap-2 rounded-lg ' onClick={() => router.push(`/staffdetails?name=${individual.name}`)}>
                                <div className='flex flex-row gap-4 '>

                                    <Image src={individual.image} alt='array' width={50} height={50} className='rounded-full' />

                                    <div>
                                        <h2>{individual.name}</h2>
                                        <p>{individual.email}</p>
                                    </div>
                                </div>

                                <div className='ml-16'>
                                    <p>{individual.gender}</p>

                                </div>
                            </div>



                        </div>
                    ))}

                </div>
                <div className=' flex-col gap-4 hidden rounded-lg md:flex'>
                    <div className='flex items-center justify-center p-2 rounded-lg bg-purple-300'>
                        <p className='font-bold text-2xl'>Mid Level</p>
                    </div>

                    {individuals.map((individual) => (
                        <div key={individual.id}>
                            <div className='flex flex-col p-4 border-1 gap-2 rounded-lg ' onClick={() => router.push(`/staffdetails?name=${individual.name}`)}>
                                <div className='flex flex-row gap-4 '>

                                    <Image src={individual.image} alt='array' width={50} height={50} className='rounded-full' />

                                    <div>
                                        <h2>{individual.name}</h2>
                                        <p>{individual.email}</p>
                                    </div>
                                </div>

                                <div className='ml-16'>
                                    <p>{individual.gender}</p>

                                </div>
                            </div>



                        </div>
                    ))}

                </div>
                <div className=' flex-col gap-4 hidden md:flex'>
                    <div className='flex items-center justify-center p-2 rounded-lg bg-green-200'>
                        <p className='font-bold text-2xl'>Field Level</p>
                    </div>

                    {individuals.map((individual) => (
                        <div key={individual.id}>
                            <div className='flex flex-col p-4 border-1 gap-2 rounded-lg ' onClick={() => router.push(`/staffdetails?name=${individual.name}`)}>
                                <div className='flex flex-row gap-4 '>

                                    <Image src={individual.image} alt='array' width={50} height={50} className='rounded-full' />

                                    <div>
                                        <h2>{individual.name}</h2>
                                        <p>{individual.email}</p>
                                    </div>
                                </div>

                                <div className='ml-16'>
                                    <p>{individual.gender}</p>

                                </div>
                            </div>



                        </div>
                    ))}

                </div>
                <div className='hidden md:flex flex-col gap-4    '>
                    <div className='flex items-center justify-center  bg-amber-200 p-2 rounded-lg'>
                        <p className='font-bold text-2xl'>Ground-Level Level</p>
                    </div>

                    {individuals.map((individual) => (
                        <div key={individual.id}>
                            <div className='flex flex-col p-4 border-1 gap-2 rounded-lg ' onClick={() => router.push(`/staffdetails?name=${individual.name}`)}>
                                <div className='flex flex-row gap-4 '>

                                    <Image src={individual.image} alt='array' width={50} height={50} className='rounded-full' />

                                    <div>
                                        <h2>{individual.name}</h2>
                                        <p>{individual.email}</p>
                                    </div>
                                </div>

                                <div className='ml-16'>
                                    <p>{individual.gender}</p>

                                </div>
                            </div>



                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default page
