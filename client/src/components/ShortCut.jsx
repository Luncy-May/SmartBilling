import React, { useState, useEffect, useRef } from 'react'

const ShortCut = ({ Darkmode }) => {
    const [today, setToday] = useState("09/28/2024")
    const handleToday = (newToday) => { setToday(newToday) }
    return (
       
        <div className='border border-gray-200 shadow-md hover:shadow-2xl min-h-[200px] min-w-[400px] p-5'>
            <div className='items-center justify-center space-y-5'>
            </div>
            <ul className='overflow-x-hidden overflow-y-auto'>
                <li className='text-4xl'>Today's Goals</li>
                <li className='text-2xl'>Practice React </li>
                <li className='text-2xl'>Practice Node </li>
            </ul>
        </div>
    )
}

export default ShortCut
