import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ChildrenPhotos from './pages/ChildrenPhotography';
import FoodPhoto from './pages/FoodPhotography.jsx';
import LifeStylePhotos from './pages/LifeStylePhotography.jsx';
import CarPhotos from './pages/CarPhotography.jsx';
import Clothing from './pages/ClothingPhotography.jsx';
import PNG from './pages/pngPhotography.jsx';
import LocationPhotography from './pages/LocationPhotography.jsx';
import IndustrialPhoto from './pages/IndustrialPhotography.jsx';
import Aerial from './pages/AerialPhotography';
import Famous from './pages/FamousFaces';

import Albums from './pages/Albums';



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>

                        <Route exact path="/Photography" component={Albums}/>

                        <Route exact path="/Photography/FoodPhotography" component={FoodPhoto}/>
                        <Route exact path="/Photography/LifeStylePhotography" component={LifeStylePhotos}/>
                        <Route exact path="/Photography/ChildrenPhotography" component={ChildrenPhotos}/>
                        <Route exact path="/Photography/CarPhotography" component={CarPhotos}/>
                        <Route exact path="/Photography/ClothingPhotography" component={Clothing}/>
                        <Route exact path="/Photography/pngPhotography" component={PNG}/>
                        <Route exact path="/Photography/LocationPhotography" component={LocationPhotography}/>
                        <Route exact path="/Photography/IndustrialPhotography" component={IndustrialPhoto}/>
                        <Route exact path="/Photography/AerialPhotography" component={Aerial}/>
                        <Route exact path="/Photography/FamousFaces" component={Famous}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
