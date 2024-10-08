import React, { useState, useEffect, useRef } from 'react'

const Task = ({ text }) => {
    const [checked, setChecked] = useState(false)
    const [edit, setEdit] = useState(false)
    const [startTimeStamp, setStartTimeStamp] = useState(0)
    const [endTimeStamp, setEndTimeStamp] = useState(0)
    const startRecording = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes;
        const seconds = today.getSeconds;
        return `${month}/${date}/${year},${hours}:${minutes}:${seconds}`;
    }
    const endRecording = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes;
        const seconds = today.getSeconds;
        return `${month}/${date}/${year},${hours}:${minutes}:${seconds}`;
    }
    const [session, setSession] = useState(false)
    const fetchClubs = async () => {
        try {
            const response = await fetch('http://localhost:8080/findClubs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (!response.ok) {
                throw new Error('The system failed. Please try again.');
            }
            const data = await response.json();
        } catch (error) {
            setError(error.message)
        }
    }
    // useEffect = () => ({
    //     fetchClubs
    // }, [])
    const [filter, setFilter] = useState(false)
    const handleFilter = () => {
        setFilter(!filter ? true : false)
    }
    const [listView, setListView] = useState(false)
    const handleListView = () => {
        setListView(!filter ? true : false)
    }
    const [gridView, setGridView] = useState(false)
    const handleGridView = () => {
        setGridView(!filter ? true : false)
    }
    return (
        <div className='flex gap-1.5 p-2.5 m-2.5 border bg-gradient-to-r from-blue-300 to-green-600 border-black border-dashed hover:border-solid'>
            <span className="relative flex">
                <input type="checkbox" className='p-1.5 scale-75 w-8 border border-black border-solid' />
            </span>
            <span className="relative">
                <button className="w-8 scale-75 pt-2.5">
                    <img className="icons" src="/coreui-icons-master/svg/free/cil-pen.svg" alt="filter icon" />
                </button>
            </span>
            <span className="relative">
                <button className="w-8 scale-75 pt-2.5">
                    <img className="icons" src="/coreui-icons-master/svg/free/cil-star.svg" alt="filter icon" />
                </button>
            </span>
            <span className="relative">
                <button className="w-8 scale-75 pt-2.5">
                    <img className="icons" src="/coreui-icons-master/svg/free/cil-bell.svg" alt="filter icon" />
                </button>
            </span>
            <span className="relative">
                <button className="w-8 scale-75 pt-2.5">
                    <img className="icons" src="/coreui-icons-master/svg/free/cil-clock.svg" alt="filter icon" />
                </button>
            </span>
            <textarea
                disabled={edit}
                className="flex-grow w-full p-1 border border-black border-solid shadow-xl"
            >
                {text}
            </textarea>
        </div>
    )
}

export default Task
