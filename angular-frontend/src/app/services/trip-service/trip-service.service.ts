import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {allTripsUrl} from "../../models/urls";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAllTrip(): any {
   return this.http.get<any[]>(allTripsUrl)

  }

}
