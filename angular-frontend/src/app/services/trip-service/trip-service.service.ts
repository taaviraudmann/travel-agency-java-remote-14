import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {allTripsUrl} from "../../models/urls";
import {TripDto} from "../../models/trips";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  getAllTrip(): Observable<TripDto[]> {
    return this.http.get<TripDto[]>(allTripsUrl)
  }
}
