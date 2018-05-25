import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FieldSupport, PageQuery } from '../../models';
import { ProfileService, MoonlayGmapService } from '../../services';
import { } from 'googlemaps';
import { MapsAPILoader, LatLng } from '@agm/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-track-fs-position',
  templateUrl: './track-fs-position.component.html',
  styleUrls: ['./track-fs-position.component.scss']
})
export class TrackFsPositionComponent implements OnInit {

  selectedRoute: any;
  zoom: number = 5;
  currentLat: number;
  currentLng: number;

  destinationLat: number;
  destinationLng: number;
  avoidTolls: boolean = true;

  availableRoutes: any[];

  selectedFieldSupport: FieldSupport;
  fieldSupports: Array<FieldSupport>;
  filteredFieldSupports: Array<FieldSupport> = [];
  pageQuery: PageQuery = new PageQuery();

  dir: any;

  // public searchControl: FormControl;
  @ViewChild("searchDestination")
  public searchDestinationElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private profileService: ProfileService,
    private moonlayGmapService: MoonlayGmapService
  ) { }

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.currentLat = position.coords.latitude;
    //   this.currentLng = position.coords.longitude;
    // });

    // center of Indonesia
    this.currentLat = -2.4151583;
    this.currentLng = 108.8264017;

    this.getFieldSupports(this.pageQuery);

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchDestinationElementRef.nativeElement, {
          types: []
        });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.destinationLat = place.geometry.location.lat();
          this.destinationLng = place.geometry.location.lng();

          // this.getRoutes();
        });
      });
    });
  }

  // getRoutes() {
  //   let origin = `${this.selectedFieldSupport.lat},${this.selectedFieldSupport.lng}`;
  //   let destination = `${this.destinationLat},${this.destinationLng}`;
  //   let avoidTolls = this.avoidTolls;

  //   this.moonlayGmapService.getRoutes(origin, destination, avoidTolls)
  //     .subscribe(response => {
  //       debugger
  //       this.availableRoutes = response.routes;
  //     });
  // }

  getFieldSupports(pageQuery: PageQuery) {
    if (pageQuery.keyword == '') {
      this.fieldSupports = [];
    }

    this.profileService.getFieldSupports(pageQuery)
      .subscribe(response => {
        // nanti buka ini ya
        // this.fieldSupports = response.items;

        this.fieldSupports = [
          {
            id: 1,
            name: 'Rahmat Hidayat',
            username: 'rahmathidayat',
            email: 'rahmat.hidayat@ai.astra.co.id',
            phone: '081208120812',

            lat: -6.222796,
            lng: 106.8119382
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
            name: 'Dhifa Irawan',
            username: 'dhifairawan',
            email: 'dhifa@ai.astra.co.id',
            phone: '081802866694',

            lat: -6.25,
            lng: 106.7
          }
        ];
      });
  }

  selectFieldSupport(fieldSupport: FieldSupport) {
    this.selectedFieldSupport = fieldSupport;

    this.zoom = 14;

    this.currentLat = fieldSupport.lat;
    this.currentLng = fieldSupport.lng;
  }

  removeSelectedFieldSupport() {
    delete this.selectedFieldSupport;
  }

  searchFieldSupports(keyword: string) {
    this.filteredFieldSupports = this.fieldSupports.filter(t => t.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1).splice(0, 5);
  }

  selectRoute(route: any) {
    this.selectedRoute = route;
  }

  removeSelectedRoute() {
    delete this.selectedRoute;
  }

  directionChange(e: any) {
    console.log(e);
    this.availableRoutes = e.routes;
    delete this.selectedRoute;
  }

}
