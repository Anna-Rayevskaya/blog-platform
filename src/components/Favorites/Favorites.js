import classes from './Favorites.module.scss'
import { addFavoritesCount } from "../../store/articlesReducer";
import {reduceFavoritesCount} from '../../store/articlesReducer'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Favorites({link, text, favoritesCount, slug, favorited}) {
  console.log(favoritesCount, favorited)
    
  const dispatch = useDispatch();
const [isClicked, setIsClicked] = useState(false);
const [heartClass, setHeartClass] = useState("");
const [countfavorites, setCountfavorites] = useState(favoritesCount);
  const registration = localStorage.getItem("registration");

  useEffect(() => {
    setCountfavorites(favoritesCount)
    setHeartClass(favorited ? `${classes.heart} ${classes.clicked}` : classes.heart);
  }, [favorited, favoritesCount]);

  const handleButtonClick = () => {
    if (registration) {
        setIsClicked(!isClicked);
        const user = JSON.parse(localStorage.getItem("user"));
            let token= user.token
        if(isClicked){
                dispatch(addFavoritesCount({
                    'id': slug,
                    'token': token,
                  }))
        } else{
            dispatch(reduceFavoritesCount({
                'id': slug,
                'token': token,
              }))
        }
 

      }
    return;
  };

  return (
    <>
      <Link to={link} className={classes.link}>
        <h4 className={classes.h4}>{text}</h4>
      </Link>
      <button
        className={heartClass}
        onClick={handleButtonClick}
      ></button>
      <span className={classes.spanHeart}>{countfavorites}</span>
    </>
  );
}

export default Favorites;
