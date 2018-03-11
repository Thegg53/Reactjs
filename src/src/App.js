import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
         episodes: [],
         names: {}
      };
    }



        componentDidMount() {
            fetch('http://localhost:3001/episodes')
            .then( results => {
              return results.json();
            })
                // .then(data => {
                //   // let pictures = data.results.map((pic)=>{
                //     let pictures = data.map((pic)=>{
                //     return(
                //       <div key={pic.results}>
                //         <img src={pic.image} />
                //       </div>
                //     ) //end return
                //   }) //close arrow func in let names and map
                //   this.setState({pictures: pictures});
                .then(data => {
                  // let pictures = data.results.map((pic)=>{
                    let episodes = data.map((episode)=>{
                    return(
                      <div key={episode.id} className="withMargin">
                        <div>name: {episode.name}</div>
                        <div>airdate: {episode.airdate}</div>
                        <img src={episode.image} />
                      </div>
                    ) //end return
                  }) //close arrow func in let names and map
                  this.setState({episodes: episodes});
                  console.log("state", this.state)
                });
            }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my test</h1>
          <h2> kjbdsfkj </h2>
        </header>
        <p className="App-intro">
          To get started, edit this file.
        </p>
         <div>Items:</div>

         {/* <button onClick={()=> this.doIt()}>1234</button> */}
         {/* <div className="container1">
           {this.state.pictures}
          </div> */}
          <p>
          <div>
            {this.state.episodes}
           </div>
         </p>

        </div>
    );
  }
}



export default App;
