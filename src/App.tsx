import './App.css';

import { useState, type FC, useMemo } from 'react';
import { TextField, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { generateRandomKey, splitIntoEightCharStrings, textToBinary } from './functions';
import { makeStyles } from '@mui/styles';

// constants ------------------------------------------------------------
const blockSize = 64;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5rem',
    border: '1px dashed gold',
  },
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
  keyContainer: {
    display: 'contents',
    flexDirection: 'column',
    width: 'fit-content',
    alignSelf: 'center',
    paddingInline: '4rem 1rem',
    border: '1px solid gray',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    borderBottom: '1px dashed gold',
    marginTop: '2rem',
  },
}));

const App: FC = () => {
  const [plainText, setPlainText] = useState('Hello!');

  const classes = useStyles();

  const randomKey = useMemo(() => generateRandomKey(), []);

  const onPlainTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlainText(event.target.value);
  };

  const ShowRandomKey: FC<{ randomKey: string }> = ({ randomKey }) => {
    const splitRandomKey = splitIntoEightCharStrings(randomKey);

    return (
      <div className={classes.keyContainer} style={{ width: 'fit-content', alignSelf: 'center', border: '1px solid gray' }}>
        {splitRandomKey.map((key) => (
          <p style={{ margin: 0, color: 'red', borderBottom: '1px solid gray', width: '20%' }}>{key}</p>
        ))}
      </div>
    );
  };
  const Divider: FC = () => {
    return <div className={classes.divider}></div>;
  };

  return (
    <div className={classes.container}>
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

      <Divider />

      <p>now we should Generate 56 bits for the effective key</p>
      <p>Add 8 bits for parity (ignoring for simplicity, as parity bits are not used in DES)</p>
      <ShowRandomKey randomKey={randomKey} />

      <Divider />

      <p>now we should create blocs and the block size is {blockSize}</p>
    </div>
  );
};

export default App;
