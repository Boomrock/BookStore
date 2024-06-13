import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import Ganres from './BooksComponent/Ganres';




export default function AddBookModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавление книги</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Название"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Автор"
            fullWidth
            variant="outlined"
          />
        <Ganres/>
          <TextField
            margin="dense"
            label="Описание"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
