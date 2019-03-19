import React, { Component } from 'react';
import Menus from './Menus';
import {Container,} from "semantic-ui-react";
import MenuForm from './MenuForm';
import axios from "axios";


class App extends Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  updateMenu = (id) => {
    axios.put(`/api/menus${id}`)
    .then( res => {
      const menus = this.state.menus.map( m => {
        if (m.id === id)
        return res.data;
        return m;
  });
  this.setState({ menus, });
})
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({menus: menus.filter(m => m.id !== id), })
    })
  }

  addMenu = (title) => {
    axios.post('/api/menus', { title })
    .then( res => {
      const {menus, } = this.state;
      console.log(res.data)
      this.setState({ menus: [...menus, res.data], });
    })
  }
  render() {
    return (
      <Container>
        <MenuForm addMenu={this.addMenu}/>
        <br />
        <br />
        <Menus menus={this.state.menus}
        updateMenu={this.updateMenu}
        deleteMenu={this.deleteMenu}/>
      </Container>
    );
  }
}

export default App;
