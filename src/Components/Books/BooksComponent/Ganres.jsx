import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Typography, Paper } from '@mui/material';

const genres = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Fantasy',
  'Mystery',
  'Thriller',
  'Biography',
  'History',
  'Children',
];

const ganresStyle = {
    backgroundColor: '#F4C9A7',
    borderRadius: '45px',
    padding: '8px 16px',
    display: 'inline-block'
};

export default function Genres() {
  const [elements, setElements] = useState([<Ganre key={0} handleGenreChangeHandler={handleGenreChangeHandler} />]);

  function handleGenreChangeHandler() {
    setElements(prevElements => {
      const newElement = <Ganre key={prevElements.length} handleGenreChangeHandler={handleGenreChangeHandler} />;
      return [...prevElements, newElement];
    });
  }

  return (
    <Box sx={{ padding: '16px' }}>
      {elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </Box>
  );
}

function Ganre({ handleGenreChangeHandler }) {
  const [genre, setGenre] = useState('');

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    handleGenreChangeHandler();
  };

  return (
    <div>
      {genre === '' ? (
        <FormControl
          variant="outlined"
          margin="dense"
        >
            <InputLabel>Жанр</InputLabel>
            <Select
                value={genre}
                variant = 'standard'
                onChange={handleGenreChange}
                label="Жанр"
                style={{...ganresStyle,
                    height:'50px'
                }}
            >
                {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                    {genre}
                </MenuItem>
                ))}
            </Select>
        </FormControl>
      ) : (
        <Paper sx={{ ...ganresStyle }}>
          <Typography variant="body1">{genre}</Typography>
        </Paper>
      )}
    </div>
  );
}
