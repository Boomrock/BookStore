import React, { useState } from "react";

import styles from "../../../Assets/Styles/Style.module.scss";

const genres = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Thriller",
  "Biography",
  "History",
  "Children",
];

const ganresStyle = {
  backgroundColor: "#F4C9A7",
  borderRadius: "45px",
  padding: "0px 16px",
  display: "inline-block",
  height: "50px",
};

export default function Genres() {
  const [elements, setElements] = useState([
    <Genre key={0} handleGenreChangeHandler={handleGenreChangeHandler} />,
  ]);

  function handleGenreChangeHandler() {
    setElements((prevElements) => {
      const newElement = (
        <Genre
          key={prevElements.length}
          handleGenreChangeHandler={handleGenreChangeHandler}
        />
      );

      return [...prevElements, newElement];
    });
  }

  return (
    <div className={styles.genres}>
      {elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </div>
  );
}

function Genre({ handleGenreChangeHandler }) {
  const [genre, setGenre] = useState("");

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    handleGenreChangeHandler();
  };

  return (
    <div>
      {genre === "" ? (
        <div>
          <select
            value={genre}
            onChange={handleGenreChange}
            style={{ ...ganresStyle, border: "none" }}
          >
            <option value="">Выберите жанр</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div style={ganresStyle}>
          <p>{genre}</p>
        </div>
      )}
    </div>
  );
}
