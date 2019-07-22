// import React, { Component } from "react";


// class Map extends Component {


//     componentDidMount() {
//         this.renderMap()
//     }


//     renderMap = () => {
//         loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&callback=initMap")
//         window.initiMap = this.initMap // keep it visible 
//     }

//     initMap = () => {
//         const map = new window.google.maps.Map(document.getElementById('map'), {   // window is global variable, so broswer can access google
//             center: { lat: -34.397, lng: 150.644 },
//             zoom: 8
//         });
//     }

//     render() {
//         return (
//             <main>
//                 <div id="map">
//                     google={this.props.google}
//                     zoom={8}

//                     initialCenter={{ lat: 47.444, lng: -122.176 }}
//                     >
//                 </div>
//             </main>
//         );
//     }
// }




// /*
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>
// */

// function loadScript(url) {
//     const index = window.getElementsByTagName("script")[0]
//     const script = window.document.createElement("script")
//     script.src = url
//     script.async = true
//     script.defer = true
//     index.parentNode.insertBefore(script, index)
// }
// export default Map;