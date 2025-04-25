export function addFavorite(id) {
  let favorites = localStorage.getItem("favorites") ?? [];
  favorites.push(id);
  localStorage.setItem("favorites", favorites);
}

export function removeFavorite(id) {
  let favorites = localStorage.getItem("favorites") ?? [];
  localStorage.setItem(
    "favorites",
    favorites.filter((elem) => elem === id),
  );
}

export function getFavoriteIds() {
  return localStorage.getItem("favorites");
}
