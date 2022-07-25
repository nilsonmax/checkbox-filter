import data from './perfume.data';

const INITAL_STATE = {
  collections: data,
};

const perfumeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default perfumeReducer;
