import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '250px',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '250px',
    width: '20%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  questions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between'
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
