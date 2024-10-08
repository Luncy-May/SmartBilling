import React from 'react'

const Friends = () => {
    const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
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
            {isLoggedIn ? (<div>
                <Link className='border border-gray-200 shadow-md hover:shadow-2xl p-2.5' to="/">Return to Home</Link>
                <h1 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px", marginBottom: "20px" }}> Not authorized to view the page. </h1>
            </div>) : (<div className='pt-5 space-y-10 text-3xl font-bold p-20'>
                <Link className='border border-gray-200 shadow-md hover:shadow-2xl p-2.5' to="/">Return to Home</Link>

                <h1>Are you sure you want to delete the family?</h1>
                <h1>You have 5 seconds to reconsider</h1>
                <form className='space-y-5' onSubmit={onSubmit}>
                    <br></br><button className='border border-gray-200 shadow-md hover:shadow-2xl p-2.5' type="submit" disabled={buttonDisabled}>
                        {isLoading ? 'Loading...' : 'Confirm Family DELETION'}
                    </button>
                </form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>)}
        </div>
    )
}

export default Friends
