import React from 'react';
import firebase from '../Fire';
const database = firebase.database();
const imgURL = require('./1176358_605080579533056_1141703202_n.jpg');

export default class Home extends React.Component{
  constructor(){
    super();
this.state={
  profile:' ',
  imgURL: imgURL,
  productdata:[]

}

  }

  componentDidMount(){
      let profileRef = firebase.database().ref('profile');
      let data = [];

      profileRef.on('value', snap =>  {

         for (var val in snap.val()) {
             data.push(snap.val()[val])
         }

      // }),()=>{
      //   this.setState({
      //     productdata: data
      //   });
      //   }
}),
// ()=>{
      this.setState({
        productdata: data
      });

}

  render(){
const profdata ={

    padding: "30px",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",

}
const productdata ={

    padding: "30px",


}

    const h1style= {

      color:'white',
      fontFamily: "'Roboto Slab', serif"
    }
    const styleIMG = {
      marginTop:"30px",
      width:200,
      height:200,
      borderRadius: "100%",

    }
    const styleli = {

      marginTop:"20px",
      color:"white",
      fontSize: "30px",
      fontFamily: "'Roboto Slab', serif",
      listStyle : "none"



    }
    const products = this.state.productdata.map((el,i)=>{
          return <li style={styleli} key={i}>{el.Products}</li>
      });

    return <div>
              <div  style = {{ height:600 , width: "100%",  backgroundColor: "rgba(64,64,64, 0.6)" , marginTop:80}}>
                <div style={{display:"flex", justifyContent:"space-between" , padding:"20px"}}>
                  <div style={productdata}>
                      <h1 style = {h1style}>List of your products</h1>
                      <div>{products}</div>
                  </div>
                    <div style={profdata}>
                        <h1 style = {h1style} >Hi {this.props.name}</h1>
                        <img style = {styleIMG} src= {this.state.imgURL} />
                    </div>
                </div>
              </div>
            </div>

  }
}
