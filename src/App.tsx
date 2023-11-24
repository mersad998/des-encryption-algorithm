import './App.css';

import { useState, type FC } from 'react';
import { TextField, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { textToBinary } from './functions';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  gold: {
    color: 'gold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
    border: '1px solid gray',
    paddingInline: 10,
  },
  textField: {
    border: '1px solid white',
  },
}));

const App: FC = () => {
  const [plainText, setPlainText] = useState('Hello');

  const classes = useStyles();

  const onPlainTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlainText(event.target.value);
  };

  return (
    <div>
      <Typography className={classes.gold} variant="h4" sx={{ marginBottom: '5rem' }}>
        Data encryption standard (DES)
      </Typography>

      <p>Enter plain text:</p>
      <TextField
        onChange={onPlainTextChange}
        value={plainText}
        sx={{ border: '1px solid gray' }}
        inputProps={{ style: { color: 'white' } }}
      />

      <p>the plain text will break into separate characters</p>
      <p>then 🤔</p>
      <p>each character will turn to binary :</p>

      <div className={classes.row}>
        {plainText.split('').map((char) => (
          <div className={classes.box}>
            <p>{char === ' ' ? '-' : char}</p>
            <ArrowDownwardIcon className={classes.gold} />
            <p>{textToBinary(char)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
