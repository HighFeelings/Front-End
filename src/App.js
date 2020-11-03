import React from 'react';
import './styles.css'
export default class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", flexDirection: 'column'}}>
        <h2 style={{color: "lightgray" }}>Hello, thank you for interesting</h2>
        <h3 style={{color: "lightgray" }}>Currently we are under construction</h3>
      </div>
    )
  }
}