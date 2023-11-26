import './App.css';

import { useState, type FC, useMemo } from 'react';
import { TextField, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { encryptWithDES, generateRandomKey, splitIntoEightCharStrings, textToBinary } from './functions';
import { useStyles } from './AppStyles';

const blockSize = 64;

const App: FC = () => {
  const [plainText, setPlainText] = useState('Hello world!');

  const classes = useStyles();

  const randomKey56Bit = useMemo(() => generateRandomKey(), []);
  const splitRandomKey = useMemo(() => splitIntoEightCharStrings(randomKey56Bit), []);

  const onPlainTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlainText(event.target.value);
  };

  const Divider: FC = () => {
    return <div className={classes.divider}></div>;
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.gold} variant="h4" sx={{ marginBottom: '2rem' }}>
        Data encryption standard (DES)
      </Typography>

      <Typography className={classes.marginVertical}>Enter plain text:</Typography>

      <TextField
        onChange={onPlainTextChange}
        value={plainText}
        sx={{ border: '1px solid gray', margin: '20px 10px' }}
        inputProps={{ style: { color: 'white' } }}
      />

      <Typography>the plain text will break into separate characters</Typography>
      <Typography>then 🤔</Typography>
      <Typography>each character will turn to binary :</Typography>

      <div className={`${classes.row} ${classes.marginVertical}`}>
        {plainText.split('').map((char) => (
          <div className={classes.box}>
            <Typography>{char === ' ' ? '-' : char}</Typography>
            <ArrowDownwardIcon className={`${classes.gold} ${classes.marginVertical}`} />
            <Typography>{textToBinary(char)}</Typography>
          </div>
        ))}
      </div>

      <Divider />

      <Typography>now we should Generate 56 bits for the effective key</Typography>
      <Typography>Add 8 bits for parity (ignoring for simplicity, as parity bits are not used in DES)</Typography>

      <div className={classes.randomKeyContainer}>
        {splitRandomKey.map((byte, index) => (
          <Typography style={{ marginInline: 4, color: index % 2 ? 'red' : 'green' }}>{byte}</Typography>
        ))}
      </div>

      <Divider />

      <div className={classes.row}>
        <Typography>now we should create blocs, the block size is </Typography>
        <Typography style={{ color: 'gold', fontSize: '20px', marginInline: 8 }}>{blockSize}</Typography>
      </div>

      <Typography>so blocks will be like this :</Typography>

      <div className={`${classes.row} ${classes.marginVertical}`}>
        {plainText.length
          ? splitIntoEightCharStrings(plainText).map((block, index) => {
              return (
                <>
                  <Typography color="gold">{index + 1} :</Typography>
                  <div className={classes.box}>
                    {block.split('').map((char) => {
                      return <Typography style={{ margin: '4px' }}>{textToBinary(char)}</Typography>;
                    })}
                  </div>
                </>
              );
            })
          : 'No blocks !'}
      </div>

      <Divider />

      <Typography>now its time to encrypt the plain text with DES alignItem</Typography>
      <Typography>the cipher text will be like this :</Typography>

      <Typography style={{ color: 'gold', fontSize: '20px', margin: '15px 0px' }}>
        {encryptWithDES(plainText, randomKey56Bit)}
      </Typography>
    </div>
  );
};

export default App;
