import "./CatCard.css";
import * as catsDB from "../../stores/catsDB";
import { useEffect, useState } from "react";

function CatCard({
  id,
  imageSrc,
  catName,
  tagList,
  favoriteChanged,
  setFavoriteChanged,
}) {
  const [isFavorite, setIsFavorite] = useState(catsDB.isFavorite(id));

  useEffect(() => {
    setIsFavorite(catsDB.isFavorite(id));
  }, [isFavorite]);

  const toggleFavorite = () => {
    if (catsDB.isFavorite(id)) {
      catsDB.removeFavorite(id);
      setIsFavorite(false);
    } else {
      catsDB.addFavorite(id);
      setIsFavorite(true);
    }
    if (favoriteChanged !== null && setFavoriteChanged !== null) {
      setFavoriteChanged(!favoriteChanged);
    }
  };

  return (
    <>
      <div className="cat-card">
        <img alt="Котик" src={imageSrc} />
        <span className="cat-name">{catName}</span>
        <span className="tag-list">{tagList.join(", ")}</span>
        <button className="mark-favorite" onClick={toggleFavorite}>
          &#x2605; {isFavorite ? "В избранном" : "В избранное"}
        </button>
      </div>
    </>
  );
}

export default CatCard;
