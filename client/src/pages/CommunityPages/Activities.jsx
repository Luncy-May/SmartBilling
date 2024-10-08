import React, { useState, useEffect, useRef } from 'react'

const Activities = () => { // where people can have activities like a duplicate of kahoot, knowledge competition, quiz games
  const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");

    const [isLoading,setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div className='border border-gray-200 shadow-md hover:shadow-2xl min-h-[200px] min-w-[400px] p-5'>
            <div className='items-center justify-center space-y-5'>
            </div>
            <ul className='overflow-x-hidden overflow-y-auto'>
              <li className='text-4xl'>Today's Top Activities</li>
              <li className='text-2xl'>Practice React </li>
              <li className='text-2xl'>Practice Node </li>
            </ul>
          </div>
        </div>
      ) : (<div>

      </div>)}
    </div>
  )
}

export default Activities
