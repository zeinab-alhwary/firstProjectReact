import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Favorite from "../MovieFavorite/MyFavorite";
import { Decrement, Increment, FavoriteMovie, MovieID } from "../Store/Action";

import "./movies.css";

function Home() {
  const mySearch=useSelector((state)=>state.seerch)
   
  const myID = useSelector((state) => state.ID);
  

  
  const myStar = useSelector((state) => state.star);
  console.log(myStar)
  const dispatch = useDispatch();
  const [movieData, setmovieData] = useState([]);
  const [page, setpage] = useState(1);

  const pagenationInc = () => {
    if (page < 10) {
      setpage(page + 1);
    }
  };
  const pagenationDec = () => {
    if (page > 0) {
      setpage(page - 1);
    }
  };
 const testing=(e)=>{
console.log(e)
  }
  const DataFav = (movieData) => {
    dispatch(MovieID(movieData));
    debugger;
   // dispatch(Increment());
  
    // const val = [];
    // const values = myID.map((i) => i.id);
    // for (let i = 0; i <values.length; i++) {
      
    //   val.push(values[i]);
    // }
    
 
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/popular?api_key=1583bd4a7b0da462480c756403c9bc65`,
        {
          params: {
           keyword:mySearch,
            
          },
        }
      )
      .then((data) => setmovieData(data.data.results))  //setmovieData(data.data.results))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1583bd4a7b0da462480c756403c9bc65`,
        {
          params: {
            page: page,
          },
        }
      )
      .then((data) => setmovieData(data.data.results))  //setmovieData(data.data.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="home homeContainer">
      {movieData.map((singleMovie) => {
        return (
          <div className="show">
            <Card style={{ width: "18rem" }} className="col-4 card">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}?api_key={singleMovie.key}`}
              />
              <span onClick={() => DataFav(singleMovie)} className="fav">
                Add FAVORITE <span className={myStar=="empty"?"fillStar":"star" }>⭐</span>
              </span>

              <Card.Body className="bodyCard">
                <Card.Title> {singleMovie.title} </Card.Title>

                <Link to={`/view/${singleMovie.id}`} className="link">
                  Show More Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      <div className="arrowRight" onClick={() => pagenationInc()}>
        <i class="fa-solid fa-arrow-right fa-4x"></i>
      </div>
      <div className="arrowLeft" onClick={() => pagenationDec()}>
        <i class="fa-solid fa-arrow-right fa-4x"></i>
      </div>
    </div>
  );
}
export default Home;
