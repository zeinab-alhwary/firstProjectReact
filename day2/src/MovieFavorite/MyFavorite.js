import { FavoriteMovie,Decrement,Increment, Remove } from "../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import "./MyFavorite.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function Favorite() {
const myID=useSelector((state)=>state.ID)
 
 
const dispatch=useDispatch()
function removeDuplication(myID){
  return myID.filter((item,index)=>myID.indexOf(item)===index);
}
const newArr=removeDuplication(myID);

 const [movieFav, setmovieFav] = useState();
 const Delete=(ind)=>{
   dispatch(Remove(ind))
   
 }
 

 return(
  <div className="Fav">
  {newArr.map((item ,index) => {
        return (
          <div className="show">
          <Card style={{ width: "18rem" }}  className="col-4 card">
            <Card.Img variant="top" src= {`https://image.tmdb.org/t/p/w500${item.poster_path}?api_key={singleMovie.key}`}/>
             
            
            <Card.Body className="bodyCard"> 
              <Card.Title> {item.title} </Card.Title>
            </Card.Body>
             
          </Card>
          <div>
            <button className="btnf " onClick={()=>Delete(index)}>Remove</button>
            <button className="btnf " >Watch it</button>
            </div>
          </div>
        );
      })}
    
  </div>
 )
  
}
export default Favorite;
