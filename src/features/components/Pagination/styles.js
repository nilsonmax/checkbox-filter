import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
  pageNumber: {
    cursor: 'pointer',
    color: '#6c7680',
    fontSize: '24px',
    width: '20px',
    textAlign: 'center',
  },
  activePage: {
    backgroundColor: '#ff8f32',
    color: '#fff',
  },
});
