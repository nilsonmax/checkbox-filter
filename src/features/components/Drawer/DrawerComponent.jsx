import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

const DrawerComponent = (props) => {
  const { activeFilter, setActiveFilter } = props;
  const classes = useStyles();
  const data = useSelector((state) => state.perfume.collections);

  const handleChange = (text) => (event) => {
    setActiveFilter((prev) => ({
      ...prev,
      [text]: event.target.checked
    }));
  };

  const allCategories = data
    .reduce((p, c) => [...p, ...c.categories], [])
    .filter((elem, index, self) => index === self.indexOf(elem));

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.list}>
        {allCategories.sort().map((text, index) => (
          <ListItem className={classes.itemList} button key={text}>
            <Checkbox onChange={handleChange(text)} />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerComponent;
