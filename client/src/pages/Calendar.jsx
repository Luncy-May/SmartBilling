import React, { useState, useEffect, useRef } from 'react'
import NotAuthorizedPage from './NotAuthorizedPage';

const Calendar = () => {

    const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
    useEffect(() => {
        if (isLoggedIn) {
            const getCalendar = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/DeleteUser/${userID}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: username,
                            userID: userID,
                        }),
                    })
                    if (!response.ok) {
                        throw new Error('Failed to submit the data. Please try again.')
                    }
                    // Handle response if necessary
                    const data = await response.json()
                    setError(data.message)
                    
                } catch (error) {
                    // Capture the error message to display to the user
                    console.error(error)
                } finally {
                    setIsLoading(false)
                }
            }
            getCalendar()
        }
    }, [isLoggedIn, userID, username])
    return (
        <div>
            <div className='pt-5 space-y-5 text-4xl font-bold flex flex-col items-center justify-center'>Calendar</div>
            {isLoggedIn ? (
                <div>

                </div>
            ) : (<div>
                <NotAuthorizedPage />
            </div>)}
        </div>
    )
}

export default Calendar
