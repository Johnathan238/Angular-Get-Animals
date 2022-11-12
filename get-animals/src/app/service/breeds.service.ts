import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  breedsUrl = `https://api.thedogapi.com/v1/breeds`
  
  constructor(private http:HttpClient) { }


  getBreeds(): Observable<any>{
    return this.http.get<any>(this.breedsUrl)
  }
}
