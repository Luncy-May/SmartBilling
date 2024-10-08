import React, { useState, useEffect, useRef } from 'react'
import { FaChalkboard, FaUsers, FaUserFriends } from 'react-icons/fa';
import NotAuthorizedPage from './NotAuthorizedPage';
const Team = () => {
    const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
    return (
        <div>
            <div className='pt-5 space-y-5 text-4xl font-bold flex flex-col items-center justify-center'>Team</div>
            {isLoggedIn ? (
                <div>
                    <div className='space-y-10 p-3 mt-[5vh] overflow-hidden'>
                        <div className='flex flex-col items-center justify-center'>

                        </div>
                        <div className='flex justify-between pl-[1vw] mt-[5vh] overflow-hidden'>
                            <div className='flex-shrink-0'>
                                <div className='text-4xl font-bold border border-gray-200 shadow-md hover:shadow-2xl min-h-[200px] min-w-[400px] flex flex-col items-center justify-center'>
                                    <div className='mb-2'>
                                        <FaChalkboard size={50} />
                                    </div>
                                    <div className='mt-2'>
                                        Club
                                    </div>
                                </div>
                            </div>

                            <div className='flex-shrink-0'>
                                <div className='text-4xl font-bold border border-gray-200 shadow-md hover:shadow-2xl min-h-[200px] min-w-[400px] flex flex-col items-center justify-center'>
                                    <div className='mb-2'>
                                        <FaUsers size={50} />
                                    </div>
                                    <div className='mt-2'>
                                        Family
                                    </div>
                                </div>
                            </div>

                            <div className='flex-shrink-0'>
                                <div className='text-4xl font-bold border border-gray-200 shadow-md hover:shadow-2xl min-h-[200px] min-w-[400px] flex flex-col items-center justify-center'>
                                    <div className='mb-2'>
                                        <FaUserFriends size={50} />
                                    </div>
                                    <div className='mt-2'>
                                        Friends
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<div>
                <NotAuthorizedPage />
            </div>)}
        </div>
    )
}

export default Team
