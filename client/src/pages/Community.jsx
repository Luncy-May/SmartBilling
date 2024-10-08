import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Activities, Feed, FindClubs, FindFriends, Gallery } from './CommunityPages'
import { CommunityNavbar } from '../components'
import NotAuthorizedPage from './NotAuthorizedPage'
const Community = ({ Darkmode }) => {
    const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const [isLoading,setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
    return (
        <div>
            {isLoggedIn ? (
        <div>
            <div className='space-y-10 p-3 overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the Splasher Community</div>
                    <CommunityNavbar />
                </div>
                {/* Sub-routes for Community */}
                <Routes>
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="findFriends" element={<FindFriends />} />
                    <Route path="findClubs" element={<FindClubs />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="feed" element={<Feed />} />
                </Routes>
            </div>
        </div>
    ): (<div>
        <div>
            <div className=' p-3 overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the Splasher Community</div>
                    <CommunityNavbar />
                </div>
                {/* Sub-routes for Community */}
                <Routes>
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="findFriends" element={<FindFriends />} />
                    <Route path="findClubs" element={<FindClubs />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="feed" element={<Feed />} />
                </Routes>
            </div>
            <NotAuthorizedPage />
        </div>
</div>)}
</div>
)

}

export default Community
