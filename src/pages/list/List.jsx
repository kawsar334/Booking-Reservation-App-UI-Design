import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, DateRange } from 'react-date-range';
import { format } from "date-fns";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ListResult from "../../components/listSearch/ListResult";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options);
  const [dateOpen, setDateOpen] = useState(false);
 
  return (
    <div className="list">
      <Navbar />
      <Header  type="list"/>
      
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="ls_item">
              <label htmlFor="">Destination:</label>
              <input type="text" value={destination}  />
            </div>
            <div className="ls_item">
              <label htmlFor="">Check-in Date:</label>
              <span onClick={() => setDateOpen(!dateOpen)} >{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`} </span>
              {dateOpen &&<div className="listCalender">
              <DateRange onChange={(item)=>setDate(item.selection) } minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date} 
                   />
              </div>}
            </div>
            <div className="ls_item">
              <label htmlFor="">Options:</label>
              <div className="listSearchOptionItem">
                <span className="listopt">Min price <small>Per night </small></span>
                <input type="number" className="lsInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">Max price <small>Per night </small></span>
                <input type="number" className="lsInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">Adult:</span>
                <input type="number" className="lsInput" placeholder={options.adult} />
              </div>

              <div className="listSearchOptionItem">
                <span className="listopt">children:</span>
                <input type="number"  placeholder={options.children} className="lsInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">room:</span>
                <input type="number" className="lsInput" placeholder={options.room} />
              </div>
            </div>
            <button className="list_btn">Search</button>
          </div>
          <div className="letResult">
            {/* <h1>list search </h1> */}
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />

            <ListResult />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default List