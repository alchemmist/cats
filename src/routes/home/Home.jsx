import React, { useState, useEffect } from "react";

import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import CatCard from "../../components/catcard/CatCard";
import "./Home.css";
import CatList from "../../components/catlist/CatList";

function Home({ cats, tags }) {
  const [displayCats, setDisplayCats] = useState(cats);
  const [currentTag, setCurrentTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const applySearchSettings = () => {
    let updatedDisplayCats = [];
    cats.map((cat, index) => {
      if (cat.name.includes(searchQuery)) {
        updatedDisplayCats.push(cat);
      }
    });
    setDisplayCats(updatedDisplayCats);
  };

  useEffect(applySearchSettings, [cats, currentTag, searchQuery]);

  return (
    <>
      <div className="main-box">
        <h1>Поиск картинок</h1>
        <div className="search-box">
          <Input
            id="search-input"
            type="text"
            autoFocus
            placeholder="Поиск по названию"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select
            id="search-tag"
            onChange={(e) => setCurrentTag(e.target.value)}
            options={tags}
            className="custom-select"
          />
        </div>
      </div>
      <div className="cats-box">
        <CatList>
          {displayCats.map((item, index) => {
            return (
              <CatCard
                imageSrc={"/src/assets/" + item.image}
                catName={item.name}
                tagList={item.tags}
                isFavorite={true}
              />
            );
          })}
        </CatList>
      </div>
    </>
  );
}

export default Home;
