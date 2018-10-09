import React from 'react';
import firebase from '../Fire';
const database = firebase.database();



export default class Campaigns extends React.Component{
  constructor(){
    super();
    this.state = {
  campaigns:[],
  visibility:false
    }

  }

  componentDidMount(){
    let campaignsRef = firebase.database().ref().child('campaigns');
    campaignsRef.on('value', snap =>  {
       var data = [];
       snap.forEach(e => {
          data.push(e.val());

       });
      this.setState({
        campaigns: data,
        visibility: true
      })

    });
  }


  render(){

    const maind ={
       height:600 ,
       width: "100%",
       backgroundColor: "rgba(64,64,64, 0.6)" ,
       marginTop:80,
       display:"flex",
       alignItems:"center",
       flexDirection:"column"
    }



    const styleh1 = {

      color:"white",
      fontSize:"60px",
      marginTop: 20,
      marginBottom:30

    }

     // visible = this.state.visibilty ? "none" : "block";

      const styleUl ={

        width:'70%',
        fontSize: 30,
        color:"white",
        listStyle: "none",
        fontFamily: "'Roboto Slab', serif",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

      }

    const campaigns = this.state.campaigns.map((el,i)=>{
          return <li key={i}>{el}</li>
      });


    return <div  style = {maind}>

      <h1 style = {styleh1}>Current Campaigns</h1>
      <ul style= {styleUl}>
          {campaigns}
      </ul>

    </div>
  }
}
