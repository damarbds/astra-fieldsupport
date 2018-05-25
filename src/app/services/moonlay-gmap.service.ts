import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoonlayGmapService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRoutes(origin: string, destination: string, avoidTolls: boolean): Observable<any> {
    // let queryString: string[] = new Array;
    // queryString.push(`origin=${origin}`);
    // queryString.push(`destination=${destination}`);
    // queryString.push(`provideRouteAlternatives=true`);
    // queryString.push(`avoidTools=${avoidTools}`);

    let queryString: string[] = new Array;
    queryString.push(`origin=${origin}`);
    queryString.push(`destination=${destination}`);
    queryString.push(`alternatives=true`);

    if (avoidTolls)
      queryString.push(`avoid=tolls`);

    queryString.push(`key=${environment.googleApiKey}`);

    return this.httpClient.get<Observable<any>>(`https://maps.googleapis.com/maps/api/directions/json?${queryString.join('&')}`);
  }
}
