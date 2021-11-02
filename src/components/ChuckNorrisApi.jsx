import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import chuckit from "../img/chuckit.png";

const ChuckNorrisApi = () => {
  const URL = `https://api.chucknorris.io/jokes/random?category=`;
  const categoriesURL = "https://api.chucknorris.io/jokes/categories";

  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [optionValue, setOptionValue] = useState("animal");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesURL);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(`${URL}${optionValue}`);
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchJokes();
  }, [URL, optionValue]);

  const reloadContent = async () => {
    try {
      const response = await fetch(`${URL}${optionValue}`);
      const data = await response.json();
      setJokes(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const options = categories.map((item) => (
    <option key={uuidv4()} value={item}>
      {item}
    </option>
  ));

  return (
    <main id="main">
      <img id="chuckPhoto" src={chuckit} alt="chuckhoto" />
      <h2 id="text">{`"${jokes.value}"`}</h2>
      <div id="buttonPlusCategories">
        <button onClick={reloadContent} id="chuckItButton">
          Chuck It!
        </button>
        <select
          value={optionValue}
          name="jokeDropDown"
          id="jokeCategory"
          onChange={(e) => setOptionValue(e.target.value)}
        >
          {options}
        </select>
      </div>
    </main>
  );
};
export default ChuckNorrisApi;
