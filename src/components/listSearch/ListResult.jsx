import { NavLink } from "react-router-dom";
import "./listSearch.scss";

const ListResult = () => {
  return (
    <div className="ListResult">

      <div className="lsLeft">
        <img src="https://images.pexels.com/photos/12641517/pexels-photo-12641517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="lsImg" />
      </div>
      <div className="lsMiddle">
        <h1>Four Point by Sherato jeddah Corniche</h1>
        <p>Deluxe King Room With city view city Tower </p>
        <span className="cancel">Free canellation</span>
        <span className="cancel_recomend">You can cancel later , so lock in this great price tody !</span>
      </div>
      <div className="lsRight">
        <div className="title">Apert hotel star miasto </div>
        <NavLink  to="/hotels/:id">
      <button className="seeNowbtn">See now</button>
        </NavLink>
        <span className="city">Jeddah </span>
        <span className="price">price:$120 </span>
        <div className="rating">
          <button>8.9</button>
          <span>Excelent </span>
        </div>
      </div>
    </div>
  )
}

export default ListResult