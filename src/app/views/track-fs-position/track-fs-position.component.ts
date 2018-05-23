import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-fs-position',
  templateUrl: './track-fs-position.component.html',
  styleUrls: ['./track-fs-position.component.scss']
})
export class TrackFsPositionComponent implements OnInit {

  selectedFieldSupport: any;
  currentLat: number;
  currentLng: number;

  fieldSupports: any = [
    {
      id: 1,
      name: 'Rahmat Hidayat',
      username: 'rahmathidayat',
      email: 'rahmat.hidayat@ai.astra.co.id',
      phone: '081208120812',

      lat: -6.121435,
      lng: 106.774125
    },
    {
      id: 2,
      name: 'Jimmy Hidayat',
      username: 'jimmyhidayat',
      email: 'jimmy.hidayat@ai.astra.co.id',
      phone: '081802866694',

      lat: -6.211,
      lng: 106.8
    },
    {
      id: 3,
      name: 'Jimmy Hidayat',
      username: 'jimmyhidayat',
      email: 'jimmy.hidayat@ai.astra.co.id',
      phone: '081802866694',

      lat: -6.25,
      lng: 106.7
    }
  ];

  constructor() { }

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.currentLat = position.coords.latitude;
    //   this.currentLng = position.coords.longitude;
    // });

    this.currentLat = -2.4151583;
    this.currentLng = 108.8264017;
  }

  selectFieldSupport(fieldSupport: any) {
    this.selectedFieldSupport = fieldSupport;

    // this.currentLat = fieldSupport.lat;
    // this.currentLng = fieldSupport.lng;
  }

  searchFieldSupports(keyword: string) {
    debugger
  }

}
