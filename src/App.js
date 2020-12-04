import React from 'react';
import './styles.css'
export default class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", flexDirection: 'column'}}>
        <h2 className="construction-fonts">Hello, thank you for interest</h2>
        <h3 className="construction-fonts">Currently we are under construction</h3>
      </div>
    )
  }
}