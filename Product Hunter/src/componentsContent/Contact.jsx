import React from 'react';
import firebase from '../Fire';
const database = firebase.database();




export default class Contact extends React.Component{
  constructor(){
    super();
    this.state = {
        name: "",
        mail: "",
        msg:""
    }
  }

    name = (event) =>{
      this.setState({
        name : event.target.value
      });
    }

    mail = (event)=>{
      this.setState({
        mail: event.target.value
      });
    }
    msg = (event)=>{
      this.setState({
        msg : event.target.value
      });
    }

  submit = (event) =>{
     event.preventDefault();
     this.setState({
         submitMsg: [{mail:this.state.mail},{name:this.state.name},{msg:this.state.msg}]
       },() => {
         let messagesRef = firebase.database().ref("contact/");
              messagesRef.push ({
               messages : this.state.submitMsg
       });
     })

      this.setState({
        name: "",
        mail: "",
        msg:""
      })
   }

      render(){

const namea ={
  width: "70%",
  height: 50,
  border: "none",
  border: '1px solid white',
  marginTop: 20,
  backgroundColor: "rgba(255,255,255, 0.6",
  color:"black",
  fontSize:"20",
  outline: "none"
}
const maila={
  width: '70%',
  height: 50,
  border: 'none',
  border: '1px solid white',
  backgroundColor: "rgba(255,255,255, 0.6",
  color:"black",
  fontSize:"20",
  outline: "none"
}

const texta = {
  width: "70%",
  height: 150,
  resize: "none",
  border: "none",
  border: "1px solid white",
  backgroundColor: "rgba(255,255,255, 0.6",
  color:"black",
  fontSize:"20",
  outline: "none"
}

const styleinp = {
  height: 150,
  width: 150,
  backgroundColor: "#27C5A9",
  color:"white",
  border: "none",
  borderRadius: "100%",
  textTransform: "uppercase",
  fontSize: 20,
  margin:20,
  outline: "none",
  fontFamily: "'Roboto Slab', serif"
}

        return <div style = {{display:"flex", justifyContent:"center", height:600 , width: "100%",  backgroundColor: "rgba(64,64,64, 0.6)" , marginTop:80}}>
         <form style= {{width:1000 ,display:"flex", flexDirection:" column", justifyContent:"space-around", alignItems:"center"}} onSubmit = {this.submit}>
                  <input style ={namea} type = "text" value ={this.state.name} placeholder = "Enter your name" onChange = {this.name}></input>
                  <input style ={maila}type = "text" value ={this.state.mail} placeholder ="Enter your e-mail" onChange= {this.mail}></input>
                  <textarea style ={texta} value={this.state.msg}placeholder ="Type your message"  onChange={this.msg}/>
                  <input style={styleinp}  type="submit" value="Send"/>

              </form>
              </div>
      }
}
