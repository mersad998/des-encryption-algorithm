import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    border: '1px dashed gold',
  },
  gold: {
    color: 'gold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
    border: '1px solid gray',
    paddingInline: 10,
    marginTop: 8,
    padding: 8,
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
  randomKeyContainer: {
    display: 'flex',
    margin: '15px 0px',
  },
  divider: {
    width: '100%',
    height: 1,
    borderBottom: '1px dashed gold',
    margin: '20px 0px',
  },
  marginVertical: {
    margin: '15px 0px',
  },
}));
