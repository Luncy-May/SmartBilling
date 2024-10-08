import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'


const CommunityNavbar = () => {
    const [session, setSession] = useState(false)
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
    // check if the user currently signs in
    return (
        <div>
            <nav className="flex space-x-4  font-bold text-gray-900 p-3 relative">
                <div>
                    <Link to="/community/gallery">Gallery</Link>
                </div>
                <div>
                    <Link to="/community/findClubs">Find Clubs</Link>
                </div>
                <div>
                    <Link to="/community/findFriends">Find Friends</Link>
                </div>
                <div>
                    <Link to="/community/feed">Feed</Link>
                </div>
                <div>
                    <Link to="/community/activities">Activities</Link>
                </div>
            </nav>
        </div>
    )
}

export default CommunityNavbar;
