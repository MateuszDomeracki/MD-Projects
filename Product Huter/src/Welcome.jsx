import React from "react";
import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
import Finalproject from './Finalproject.jsx';
import firebase from './Fire';
const database = firebase.database();


// database.ref('/').once('value').then(function(snapshot) {
//   console.log(snapshot.val());
// });



const video = require('./componentStyle/video/New York City - 1044.mp4');

class Welcome extends React.Component{

state = {
  isLoggedIn : false,
  userID: "",
  name: "",
  email:"",
  picture:"",
  videoURL: video
}

responseFacebook = response => {
  this.setState({
    isLoggedIn: true,
    userID : response.userID,
    name : response.name,
    email : response.email,
    picture : response.picture.data.url
  })
}
logout = ()=>{
  this.setState({
    isLoggedIn : false
  })
}



    render() {
      let fbContent;
      let content;
      let profile;
      let nonvis = this.state.isLoggedIn ? "block" : "none"


      if(this.state.isLoggedIn){

          content = <Finalproject face={this.state.picture} name = {this.state.name}/>
      }else{
        fbContent= (  <FacebookLogin
    appId="303054280426768"
    autoLoad={true}
    fields="name,email,picture"
    callback={this.responseFacebook} />)
      }


      const styleBtn = {
        display: nonvis,
        height: 30,
        width: 80,
        backgroundColor: "#27C5A9",
        color:"white",
        border: "none",
        borderRadius: 7,
        textTransform: "uppercase",
        fonSize: 15,
        marginTop:5,
        fontFamily: "'Roboto Slab', serif"

}
const styleH1 = {
    color: 'white',
    fontSize: 80,
    marginTop :10,
    fontFamily: "'Pacifico', cursive"

}

const head = {
    display:"flex" ,
    alignItems :"center" ,
    justifyContent :"space-between",
    fontFamily: "'Roboto Slab', serif"

  }
console.log(this.state.name)
      return(
            <div>

              <video style= {{position: "absolute" , zIndex:-1 , width:"100vw" , height:"100%vh"}} id="background-video" loop autoPlay>
                   <source src={this.state.videoURL} type="video/mp4" />
                   <source src={this.state.videoURL} type="video/ogg" />
                   Your browser does not support the video tag.
               </video>
              <div style = {{backgroundColor: "rgba(64,64,64, 0.6)" , }}>
                <div className = "container">
                  <div  style = {head}>
                    <h1 onClick={this.refresh} style = {styleH1}>Product Hunter</h1>
                    <div style= {{ display:"flex" , flexDirection:"column", alignItems:"center"}}>
                      <div >
                      <img style = {{display: nonvis ,}} src = {this.state.picture} alt = {this.state.name}/>
                      </div>
                      <button style ={styleBtn} onClick={this.logout}>Logout</button>
                        {fbContent}
                      </div>
                      </div>

                </div>
              </div>

                  <div className = "container">
                {content}
                </div>

            </div>
        );
    }
}

class App extends React.Component{
  render(){
    return <Welcome/>

}}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
