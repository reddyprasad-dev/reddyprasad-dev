import { AiFillHome, AiFillSetting } from 'react-icons/ai';

import { IoMdContact } from 'react-icons/io';

import { BsMoonFill } from 'react-icons/bs';

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const Header = () => {

    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [clock, setClock] = useState()

    useEffect(() => {
        const dateMonthYearArray = new Date().toLocaleDateString().split('/')
        const date = parseInt(dateMonthYearArray[1])
        const month = parseInt(dateMonthYearArray[0])
        const year = parseInt(dateMonthYearArray[2])
        setDate(date)
        setMonth(month)
        setYear(year)

        setInterval(() => {
            const hoursMinutesSeconds = new Date().toLocaleTimeString().split(':')
            const hours = parseInt(hoursMinutesSeconds[0])
            const minutes = parseInt(hoursMinutesSeconds[1])
            const seconds = parseInt(hoursMinutesSeconds[2].slice(0,2))
            const clock = hoursMinutesSeconds[2].slice(3)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            setClock(clock)

        }, 1000)
        
    }, [])


    return (
         <div className='header'>
            <div className='header-top-section'>
            <p className='date'> Date: {date > 9 ? date : `0${date}`}/{month > 9 ? month : `0${month}`}/{year} </p>
            <p className='time'> Time: {hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`} {clock}</p>
        </div>
        <nav className='nav-bar'>
            <ul className='nav-bar-options-container'> 
                <Link to="/" className='link'>
                    <li className='nav-item'> Home <AiFillHome className='nav-item-icon' size={18} /> </li>
                </Link>
                <Link to="/projects" className='link'>
                    <li className='nav-item'> Projects <AiFillSetting className='nav-item-icon' size={18} /> </li>
                </Link>
            </ul>
        </nav>
         </div>
    )
}

export default Header