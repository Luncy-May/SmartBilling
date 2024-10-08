import React, { useState, useEffect, useRef } from 'react'
import { Plan } from '../components'
import NotAuthorizedPage from './NotAuthorizedPage';
const MyPlans = ({ Darkmode }) => {
  const [planList, setPlanList] = useState([])
  const [JobsList, setJobsList] = useState(null);
  const [error, setError] = useState(null)
  const [searchContent, setSearchContent] = useState("")
  const username = localStorage.getItem("username");
  const userID = localStorage.getItem("userID");
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
  useEffect(() => {

    if (isLoggedIn) {
      const getPlans = async () => {
        try {
          const response = await fetch(`http://localhost:8080/GetPlans/${userID}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
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
      getPlans()
    }
  }, [isLoggedIn, userID, username]);
  async function onSearch(event) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const response = await fetch(`http://localhost:8080/GetPlans/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
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

  async function onOpen(event, planID) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const response = await fetch(`http://localhost:8080/GetPlans/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
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

  async function onClose(event, planID) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const response = await fetch(`http://localhost:8080/GetPlans/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
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


  async function onInvite(event, planID) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
    const inviteeUsername = event.target.elements.inviteeUsername.value;
    try {
      const response = await fetch(`http://localhost:8080/manage-plans/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
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
  const handleChange = (e) => {
    setSearchContent(e.target.value)
  }
  console.log("This is the jobsList:");
  console.log(JobsList);


  return (
    <div>
      <div className='pt-5 space-y-5 text-4xl font-bold flex flex-col items-center justify-center'>My plans</div>
      {isLoggedIn ? (
        <div className='pt-5'>
          <div className='flex flex-col items-center justify-center'>

          </div>
          {/* Toolbar to add, edit, or preview plan and tasks */}
          <div>

          </div>
          {/* display a list of plans */}
          <div className='pl-[25vh]'>
            <Plan />
            {planList.map((key, index) => {
              <Plan />
            })
            }

          </div>
        </div>
      ) : (<div>

        <NotAuthorizedPage />
      </div>)}
    </div>
  )
}

export default MyPlans
