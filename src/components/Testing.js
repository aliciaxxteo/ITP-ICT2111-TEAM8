import React, { Component } from 'react';
import firebase from "../Firebase/firebase";


class Testing extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
  const itemsRef = firebase.database().ref('testing');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        id: item,
        title: items[item].title
      });
    }
    this.setState({
      items: newState
    });
  });
  }
    
  render() {
    return (
      <div>
         <ul>
           {this.state.items.map((item) => {
            return (
              <p>
                <h3>ID: {item.id}</h3>
                <h3>TITLE: {item.title}</h3>
              </p>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Testing;
