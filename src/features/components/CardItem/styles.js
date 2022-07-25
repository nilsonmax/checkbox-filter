import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    marginBottom: '24px',
  },
  boxContent: {
    padding: '24px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  boxHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '75%',
    marginBottom: '24px',
  },
  boxTitle: {
    color: '#ff8f32',
    fontWeight: 400,
    fontSize: '24px',
  },
  boxCagtegories: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  boxListCagtegories: {
    color: '#ff8f32',
    fontWeight: 400,
    fontSize: '16px',
  },
  boxDescription: {
    color: '#6c7680',
    fontWeight: 400,
    fontSize: '16px',
  },
  boxFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  boxFooterName: {
    color: '#6c7680',
    fontWeight: 400,
    fontSize: '16px',
  },
  boxFooterPrice: {
    padding: '0 8px',
    fontWeight: 300,
    fontSize: '24px',
  },
  boxItem: {
    padding: '0 16px 0 0',
  },
});
