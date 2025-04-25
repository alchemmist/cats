function getRawFavoriteIds() {
  if (localStorage.getItem("favorites") === "") {
    localStorage.setItem("favorites", "[]");
  }
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
}

export function addFavorite(id) {
  let favorites = getRawFavoriteIds();
  favorites.push(id);
  localStorage.setItem("favorites", favorites);
}

export function removeFavorite(id) {
  let favorites = getRawFavoriteIds();
  localStorage.setItem(
    "favorites",
    favorites.filter((elem) => elem === id),
  );
}

export function getFavoriteCats(cats) {
  return cats.length === 0 ? [] : getRawFavoriteIds().map((id) => cats[id]);
}
