import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./MoviesData.css";
import { useDispatch, useSelector } from "react-redux";
 
import { FavoriteMovie ,MovieID} from "../Store/Action";
import Loding from "../LoderCom";

function Movies() {
 // const IDS=[];

  const param = useParams();
  console.log(param);
  const myStar=useSelector((state)=>state.star);
  const myLoder=useSelector((state)=>state.isLoding)
  const [movieId,setmovieId]=useState([]);
  
  const dispatch=useDispatch();
  const [movieDetails, setmovieDetails] = useState([]);
  const IsFav=(id)=>{
    
    setmovieId()
    console.log(setmovieId)
  // dispatch(MovieID(setmovieId))
    
  dispatch(FavoriteMovie(myStar=="empty"?"fill":"empty"))
 }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=1583bd4a7b0da462480c756403c9bc65`
      )
      .then((data) => setmovieDetails(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="col">
      
        <div className="box">
          <h1>DETAILS</h1>
           
          { myLoder==false? <Loding/>:
          <Card style={{ width: "300px" }} className="card1">
         
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}?api_key={movieDetails.key}`}
            />
            <Card.Body className="bodyCard">
              <div className="content">
                <div >
                  <h3> {movieDetails.title} </h3>
                  <p>{movieDetails.overview}</p>
                </div>
              </div>
            </Card.Body>
              
          </Card> 
           }
        </div>
       
      </div>
    </>
  );
}
export default Movies;
