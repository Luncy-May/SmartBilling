import React, {useState, useEffect, useRef} from 'react'

const Calendar = () => {
    const firstday = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const positionOfFirstDay = firstday.getDay() //get the position of the first day
    let weeksList = []
    for (let random = 0; random < 6; random++) {
        let week = []
        for (let day = random * 7; day < (random + 1) * 7; day++) {
            if (day === 0 && positionOfFirstDay === 0) {
                firstday.setDate(firstday.getDate() - 7);
            } else if (day === 0) {
                firstday.setDate(firstday.getDate() + (day - positionOfFirstDay));
            } else {
                firstday.setDate(firstday.getDate() + 1);
            }
            let position;
            if (day % 7 === 0) { position = "Sun" }
            else if (day % 7 === 1) { position = "Mon" }
            else if (day % 7 === 2) { position = "Tue" }
            else if (day % 7 === 3) { position = "Wed" }
            else if (day % 7 === 4) { position = "Thu" }
            else if (day % 7 === 5) { position = "Fri" }
            else { position = "Sat" }
            let eachDay = {
                day: firstday.getDate(),
                month: firstday.getMonth(),
                position: position,
            }
            week.push(eachDay)
        }
        weeksList.push(week)
    }
    return (
        <div>

        </div>
    )
}

export default Calendar
