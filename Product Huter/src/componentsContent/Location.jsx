import React from 'react';
import firebase from '../Fire';
const database = firebase.database();

// database.ref('/').once('value').then(function(snapshot) {
//   console.log(snapshot.val());
// });

export default class Location extends React.Component {

  constructor() {
    super();

    const arr = [];
    for (let i = 0; i < 20; i++) {
        const latitude = (Math.random() * (52.260836 - 52.207850 )) + 52.207850;
        const longitude = (Math.random() * (21.109543- 20.933762 )) + 20.933762;
      arr.push([latitude, longitude]);
    }

    this.state = {
  visibility: "none",
  data: [],
  markers: []
  }
}

  showMap =() =>{


          // console.log(this.map);
          //setMapOnAll(null);

          this.state.markers.forEach((e,i) => {
            e.setMap(null);
          })


          const arr = [];
          for (let i = 0; i < 20; i++) {
              const latitude = (Math.random() * (52.260836 - 52.207850 )) + 52.207850;
              const longitude = (Math.random() * (21.109543- 20.933762 )) + 20.933762;
            arr.push([latitude, longitude]);
          }

          let markers = [];

          this.setState ({
            data: arr
          }, () => {

            this.state.data.forEach((e,i) => {

              let pos = {
                lat: e[0],
                lng: e[1]
              }

              let marker = new google.maps.Marker({position: pos, map: this.state.map});
              google.maps.event.addListener(marker, 'mouseover', (x,d) => {
                console.log(marker.internalPosition.lat())

                      marker.setMap(null)

                      console.log(e[0], marker.internalPosition.lat())

                      this.setState({
                        data: this.state.data.filter(e => {
                          return e[0] !== marker.internalPosition.lat()
                          }),
                      },() => {
                        let locationRef = firebase.database().ref("location/");
                        locationRef.set ({
                          Locations : this.state.data
                        });
                        let productsRef = firebase.database().ref("profile/");
                        productsRef.push ({
                          Products : "Your product : " + marker.internalPosition
                        });

                      })

        });
              markers = [...markers, marker]

            })

            this.setState({
              markers: [...markers]
            }, () => {
              let locationRef = firebase.database().ref("location/");
              locationRef.set ({
                Locations : this.state.data
              });
            });
          })

    this.setState ({
      visibility: "block",
      buttvis: "block"
    })
  }

    componentDidMount() {
    var uluru = {
      lat: 52.232879,
      lng: 21.004829
    };
    // The map, centered at Uluru
    this.map = new google.maps.Map(this.mapContainer, {
      zoom: 12,
      center: uluru
    });

    this.setState({
      map : this.map
    })
    }

  render() {

    const styleBtn1 = {
      height: 150,
      width: 150,
      backgroundColor: "#27C5A9",
      color:"white",
      border: "none",
      borderRadius: "100%",
      textTransform: "uppercase",
      fontSize: 20,
      margin:20,
      outline: "none"
}


        const style = { height : 600,
                        width: 1000,
                        display: this.state.visibility
                       }

    return <div style = {{display:"flex", justifyContent:"center", height:600 , width: "100%",  backgroundColor: "rgba(64,64,64, 0.6)" , marginTop:80}}>
            <div style = {{display:"flex" , flexDirection: "column"}}>
          <button style = {styleBtn1} onClick = {this.showMap}>Set location</button>
                  </div>

          <div style={style} ref={map => this.mapContainer = map}></div>

    </div>
  }

}
