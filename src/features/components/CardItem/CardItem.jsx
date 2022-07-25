import { Box, Grid } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles';

const CardItem = (props) => {
  const { item } = props;
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Grid className={classes.container} container spacing={3}>
          <Grid item xs={12}>
            <Box className={classes.boxContent}>
              <Box className={classes.box}>
                <Box className={classes.boxHeader}>
                  <span className={classes.boxTitle}>{item.name}</span>
                  <span className={classes.boxDescription}>
                    {item.description}
                  </span>
                </Box>
                <Box className={classes.boxCagtegories}>
                  <span className={classes.boxListCagtegories}>
                    {item.categories.join(' / ')}
                  </span>
                </Box>
              </Box>
              <Box className={classes.boxFooter}>
                {item.sizes.map((cat) => (
                  <div className={classes.boxItem}>
                    <span className={classes.boxFooterName}>{cat.name}</span>
                    <span className={classes.boxFooterPrice}>
                      {cat.price !== 0
                        ? new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'EUR',
                          }).format((cat.price / 100).toFixed(2))
                        : 'Free'}
                    </span>
                  </div>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CardItem;
