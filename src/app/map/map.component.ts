import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//online
//import { Map } from 'mapbox-gl';

//on-premise
//Definition of global var mapboxgl, pointing on var mapboxgl added to html by in index.html e.g: <script src='http://localhost:2999/mapbox-gl-js/v1.6.1/mapbox-gl.js'></script>
declare let mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map: any;
  style = 'mapbox://styles/atlas-user/ckpl6bsgv001x09lge0613d15';
  //style = 'mapbox://styles/mapbox/streets-v11';
  lng =  34.976832;
   lat = 31.272795;

  constructor() { }

  ngOnInit(): void {

    //on-premise
    mapboxgl.accessToken = environment.mapbox.accessToken;
    mapboxgl.baseApiUrl = environment.mapbox.atlasUrl;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 6.6,
      center: [this.lng, this.lat]
    });

    //onlione
    // this.map = new Map({
    //   accessToken: environment.mapbox.accessToken,
    //   container: 'map',
    //   style: this.style,
    //   zoom: 6.6,
    //   center: [this.lng, this.lat]
    // });
    
  }

}
