export function addFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  favorites.push(id);
  localStorage.setItem("favorites", favorites);
}

export function removeFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  localStorage.setItem(
    "favorites",
    favorites.filter((elem) => elem === id),
  );
}

export function getFavoriteIds() {
  return JSON.parse(localStorage.getItem("favorites")) ?? [];
}

export function getFavoriteCats(cats) {
  return cats.length === 0 ? [] : getFavoriteIds().map((id) => cats[id]);
}
