import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),

    '&$checked': {
      color: '#ff8f32',
    },
  },
  checked: {},
  toolbar: theme.mixins.toolbar,
  itemList: {
    paddingLeft: '32px',
    borderBottom: '1px solid #ccc',
  },
}));
