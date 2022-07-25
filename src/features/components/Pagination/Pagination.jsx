import React from 'react';

import { useStyles } from './styles';

const Pagination = (props) => {
  const { pageNumbers, handleClick, currentPage } = props;
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.pageContent}>
        {pageNumbers.map((page, index) => {
          const spanClasses = [classes.pageNumber];
          index === currentPage - 1 && spanClasses.push(classes.activePage);
          return (
            <span
              key={page}
              id={page}
              onClick={() => handleClick(page)}
              className={spanClasses.join(' ')}>
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
