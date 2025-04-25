import "./CatCard.css";
import * as catsDB from "../../stores/catsDB";

function CatCard({ id, imageSrc, catName, tagList, isFavorite }) {
  const toggleFavorite = () => {
    if (isFavorite) {
      catsDB.removeFavorite(id);
    } else {
      catsDB.addFavorite(id);
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
