import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gafas } from '../models/gafas';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/gafas';

@Injectable({
  providedIn: 'root'
})
export class GafasService {

  currentGafasId: number;

  constructor(private http: HttpClient) { }

  setCurrentGafasId(id: number){
    this.currentGafasId = id;
  }

  getCurrentGafasId(){
    return this.currentGafasId;
  }

  getGafasId(id: number): Observable<Gafas>{
    return this.http.get<Gafas>(apiUrl + "/" + id);
  }

  getGafas(): Observable<Gafas[]> {
    return this.http.get<Gafas[]>(apiUrl);
      
  };

  deleteGafas(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addGafas(gafas: Gafas): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", gafas.model);
    bodyEncoded.append("brand", gafas.brand);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateGafas(id: number, gafas: Gafas): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", gafas.model);
    bodyEncoded.append("brand", gafas.brand);
    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + id, body, httpOptions);

  }

  getMenuOpts() {
    return this.http.get("/assets/data/menu.json")

  }
}
