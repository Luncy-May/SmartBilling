import React, {useState, useEffect, useRef} from 'react'

const Gallery = () => { // kinda like an art museum where people share their beautiful design of custom plans
  const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const [isLoading,setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
    useEffect(() => {
      if (isLoggedIn) {
      const time = new Date()
      const getProfile = async () => {
          try {
              const response = await fetch(`http://localhost:8080/GetProfile/${userID}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      username: username,
                      userID: userID,
                      lastLogin: time,
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
              setError(error.message)
              console.error(error)
          } finally {
              setIsLoading(false)
          }
      }
      getProfile()
  }}, [isLoggedIn, username, userID]);
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

export default Gallery
