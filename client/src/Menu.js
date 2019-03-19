import React from 'react';
import {Button, Icon} from "semantic-ui-react"
const Menu = ({ menu, title, updateMenu, deleteMenu }) => (
  <div>
    <h1> { menu.title } </h1>
    <Button
    icon
    color="red"
    onClick={() => deleteMenu(menu.id)}>
    <Icon name="trash" size="small"/>
    </Button>
    <Button
    icon
    color="blue"
    onClick={updateMenu}>
    <Icon name="pencil" size="small"/>
    </Button>
  </div>
)

export default Menu;