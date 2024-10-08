import React, { useState, useEffect, useRef } from 'react'
import Task from './Task'

const Plan = () => {
    const [isExpanded, setIsExpanded] = useState(false) // Controls the dropdown
    const [edit, setEdit] = useState(false)
    const [exampleText, setExampleText] = useState("Hello World")
    const [taskList, seTaskList] = useState([])
    // Toggle the dropdown
    const toggleDropdown = () => {
        setIsExpanded(!isExpanded)
    }

    // Toggle edit mode
    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className='items-center justify-center'>
            {/* Title section with icons and triangle */}
            <div
                className='flex items-center justify-between p-2.5 ml-2p w-[70vw] mt-2p border border-black border-solid cursor-pointer transition-colors duration-300' // Updated: added `transition-colors duration-300` for smooth color transition
                onClick={toggleDropdown}
            >
                <div className='flex items-center'>
                    <div className='p-1.5 text-2xl' contentEditable={!edit}>Example Title</div>
                    <span className="relative">
                        <button className="w-8 scale-75 pt-2.5" onClick={handleEdit}>
                            <img className="icons" src="/coreui-icons-master/svg/free/cil-pen.svg" alt="edit icon" />
                        </button>
                    </span>
                    <span className="relative">
                        <button className="w-8 scale-75 pt-2.5">
                            <img className="icons" src="/coreui-icons-master/svg/free/cil-save.svg" alt="save icon" />
                        </button>
                    </span>
                    <span className="relative">
                        <button className="w-8 scale-75 pt-2.5">
                            <img className="icons" src="/coreui-icons-master/svg/free/cil-share.svg" alt="share icon" />
                        </button>
                    </span>
                    <span className="relative">
                        <button className="w-8 scale-75 pt-2.5">
                            <img className="icons" src="/coreui-icons-master/svg/free/cil-delete.svg" alt="delete icon" />
                        </button>
                    </span>
                </div>

                {/* Triangle to show/hide the content */}
                <div className='pr-2'>
                    <div
                        className={`w-4 h-4 border-solid border-l-2 border-b-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-45' : '-rotate-45'}`}
                        style={{ borderColor: 'black' }} // Updated: added borderColor to make the triangle darker
                    ></div>
                </div>
            </div>

            {/* Dropdown body (visible based on state) */}
            <div
                className={`overflow-hidden transition-max-height duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`} // Added: max height transition for smooth content expansion
            >
                <div className='flex'>
                    <div className="min-h-screen overflow-y-auto overflow-x-hidden ml-2p p-1 w-[70vw] border border-black border-solid shadow-xl ">
                        <h1 className='p-1.5 text-2xl'>Tasks: </h1>
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                        <Task text={exampleText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
