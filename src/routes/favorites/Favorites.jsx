import CatCard from "../../components/catcard/CatCard";
import CatList from "../../components/catlist/CatList";
import "./Favorites.css";

function Favorites() {
  const favourites = [1];
  return (
    <>
      <div className="favorites-block">
        <h1>Избранное</h1>
        {favourites.length === 0 ? (
          <span>У вас пока нет избранных картинок.</span>
        ) : (
          <CatList>
            {[...Array(30)].map(() => {
              return (
                <CatCard
                  imageSrc="/src/assets/cat.jpg"
                  catName="Котофей"
                  tagList={["Розовый", "Легендарный"]}
                  isFavorite={true}
                />
              );
            })}
          </CatList>
        )}
      </div>
    </>
  );
}

export default Favorites;
