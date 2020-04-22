import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition.js';
import Signin from './components/Signin';
import Register from './components/Register';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const clarifaiApp = new Clarifai.App({apiKey: '43f1cbb40bf84d039c9349f66171a1ff'});

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
      route: "signin",
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: ''
      }
    }
  }

  calculateFaceLocation = (data, i) => {
    const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBorder = (box) => {
    this.setState({boxes: this.state.boxes.concat([box])});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonChange = () => {
    this.setState({imageUrl: this.state.input});
    this.setState({boxes: []});
    clarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}));
          })
        }
        for (var i = 0; i < response.outputs[0].data.regions.length; i++) {
          this.displayFaceBorder(this.calculateFaceLocation(response, i));
        }
      })
      .catch(err => { console.log(err); });
  }

  onRouteChange = (newRoute) => {
    if (newRoute === "home") {
      this.setState({isSignedIn: true});
    } else {
      this.setState({isSignedIn:false});
    }
    this.setState({route: newRoute});
  }

  loadUser = (user) => {
    this.setState({user: user});
  }

  render () {
    const { input, imageUrl, boxes, route, isSignedIn, user} = this.state;
    if (route === "home") {
      return (
        <div>
          <Particles params={particlesOptions} className="particles" />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
          <Logo />
          <Rank name={user.name} entries={user.entries}/>
          <ImageLinkForm 
            onButtonChange={this.onButtonChange} 
            onInputChange={this.onInputChange}
          />
          <FaceRecognition boxes={boxes} imageUrl={imageUrl}/>
        </div>
      );
    } else if (route === "signin") {
      return (
        <div>
          <Particles params={particlesOptions} className="particles" />
          <Navigation onRouteChange={this.onRouteChange}/>
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
      )
    } else if (route === "register") {
      return (
        <div>
          <Particles params={particlesOptions} className="particles" />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
      )
    }
  }
}

export default App;
