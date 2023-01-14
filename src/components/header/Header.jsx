import { NavLink, useNavigate } from "react-router-dom"
import "./header.scss";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar, DateRange } from 'react-date-range';
import {format} from "date-fns";
import { useState } from "react";
const Header = ({type}) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("")
  const [openOptions , setOpenOptions ] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })

  
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  //HANDLING OPTIONS FUNCTIONALITY 
  const handleOptions = (name, operation)=>{
      setOptions((prev)=>{
        return{
          ...prev , [name]:operation === "i" ? options[name] +1 :options[name]-1
        }
      })
  }

  //handleSearch
  const handleSearch = ()=>{
    navigate("/hotel",{state:{destination, date, options}})

  }

  return (
    <div className="header">
      <div className="header_container" style={type==="list" ? {margin:"0px"}:{margin:"0px 100px 100px"}}>
      <div className="headerList">
        <ul>
          <li><NavLink to="#" style={{ background:"rgb(255, 255, 255, 0.4)"}} ><i className="fa-solid fa-bed"></i><span>Stays</span></NavLink></li>
          <li><NavLink to="#"><i className="fa-solid fa-plane-circle-check"></i><span>Flights</span></NavLink></li>
          <li><NavLink to="#"><i className="fa-solid fa-car"></i><span>Car Rentals</span></NavLink></li>
          <li><NavLink to="#"><i className="fa-solid fa-circle-half-stroke"></i><span>Attactions</span></NavLink></li>
          <li><NavLink to="#"><i className="fa-solid fa-car-side"></i><span>Airport Taxis</span></NavLink></li>
        </ul>
         { type !== "list" &&<> <h1 className="headerTitle">Find your next stay</h1>
          <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
            <button>Signin </button></>}
         
      </div>
       
        {type!=="list" && <div className="headerSearch">
          
          <div className="headerSearchItem">
            <i className="fa-solid fa-bed"></i>
            <input type="text" placeholder="Where are you going?" onChange={(e)=>setDestination(e.target.value)}/>
          </div>
          <div className="headerSearchItem">
            <i class="fa-solid fa-calendar-days"></i>
            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${format(date[0].startDate, "MM/dd/yyyy")}, to ${format(date[0].endDate, "mm-dd-yy")}`}</span>

            {openOptions &&<div className="calender">
           <DateRange 
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
           />
           </div>}
          </div>
          <div className="headerSearchItem">
            <i class="fa-regular fa-user"></i>
            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult ${options.children} children ,${options.room} room`}</span>
            {openOptions && <div className="options">
                <div className="optionItem">
                <span>Adult :</span>
                <div className="counterDiv">
                  <button onClick={()=>handleOptions("adult","i")}>+</button>
                  <button>{options.adult}</button>
                  <button onClick={() => handleOptions("adult", "d")}>-</button>
                </div>
                </div>
                {/*  */}
              <div className="optionItem">
                <span>Children :</span>
                <div className="counterDiv">
                  <button onClick={() => handleOptions("children", "i")}>+</button>
                  <button>{options.children}</button>
                  <button onClick={() => handleOptions("children", "d")}>-</button>
                </div>
              </div>
                {/*  */}
              <div className="optionItem">
                <span>Room :</span>
                <div className="counterDiv">
                  <button onClick={() => handleOptions("room", "i")}>+</button>
                  <button>{options.room}</button>
                  <button onClick={() => handleOptions("room", "d")}>-</button>
                </div>
              </div>
              </div>}

          </div>
          <button className="searchBtn" onClick={handleSearch}>Search</button>
        </div>}
      </div>
    </div>
  )
}

export default Header