import React, {useState}from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
const Histogram = ({ Darkmode, startDate, endDate }) => {
    const [title, setTitle] = useState("09/22/2024 - 09/28/2024")
    const handleTitle = (newTitle) => {setTitle(newTitle)}
    return (
        <div className='border border-gray-200 shadow-md hover:shadow-2xl flex overflow-hidden max-w-[1400px]'>
            <div>
                <BarChart
                    series={[
                        { data: [35] },
                        { data: [51] },
                        { data: [15] },
                        { data: [60] },
                    ]}
                    height={300}
                    xAxis={[{ data: ['My Progress'], scaleType: 'band' }]}
                    width={800}
                    title={title}
                />
            </div>
            <div className='items-center justify-center space-y-5 pt-5'>
                <h1 className='text-3xl'>Progress History {title}</h1>
                <h1 className='text-2xl'>Tasks Completed: 20</h1>
                <h1 className='text-2xl'>Tasks In Progress: 20</h1>

            </div>

        </div>
    )
}

export default Histogram
