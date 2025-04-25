import "./CatCard.css";

function CatCard({ imageSrc, catName, tagList, isFavorite }) {
  return (
    <>
      <div className="cat-card">
        <img alt="Котик" src={imageSrc} />
        <span className="cat-name">{catName}</span>
        <span className="tag-list">{tagList.join(", ")}</span>
        <button className="mark-favorite">
          &#x2605; {isFavorite ? "В избранном" : "В избранное"}
        </button>
      </div>
    </>
  );
}

export default CatCard;
