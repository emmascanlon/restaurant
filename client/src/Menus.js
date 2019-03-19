import React from "react";
import Menu from './Menu';

const Menus = ({ menus, updateMenu, deleteMenu}) => (
  <div>
    { menus.map( menu => 
   <Menu key={menu.id}
    menu={menu} 
    updateMenu={updateMenu}
    deleteMenu={deleteMenu} />
    )
    }
  </div>
)


export default Menus