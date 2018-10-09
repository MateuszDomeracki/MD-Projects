import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
require ('./main.scss')
import Home from './componentsContent/Home.jsx';
import Contact from './componentsContent/Contact.jsx';
import Campaigns from './componentsContent/Campaigns.jsx';
import Location from './componentsContent/Location.jsx';

const video = require('./componentStyle/video/New York City - 1044.mp4');

export default class App extends React.Component {
  constructor (props) {
       super(props);

       this.state = {
           videoURL: video
       }
   }
  render() {

    console.log(this.props.face)

const styleUl = {
  display: "flex",
  justifyContent : "flex-end",
  listStyle : 'none',



}
const styleLi = {
  color:"white" ,
  fontSize:30,
  textDecoration : "none",
  padding:5,
  fontWeight:600
}

    return  ( <HashRouter>
                <div>
                <ul style = {styleUl}>
                  <li>  <Link style = {styleLi}	to="/">Profile / </Link></li>
                  <li>  <Link style = {styleLi}	to="/location"> Location /</Link></li>
                  <li>  <Link style = {styleLi}	to="/campaigns"> Campaigns / </Link></li>
                  <li>  <Link style = {styleLi}	to="/contact"> Contact</Link></li>

                </ul>

                <Switch>
                  <Route exact path='/' render={(props) => <Home {...props} face={this.props.face} name={this.props.name} />} />
                  <Route path='/location' render={(props) => <Location {...props} database={this.props.database} />} />
                  <Route path='/campaigns' component={Campaigns} />
                  <Route path='/contact' component={Contact} />

                </Switch>
      </div>
            </HashRouter>

    )

  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
