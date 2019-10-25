import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  uri = 'http://localhost:4000/ventas';
  constructor(private http: HttpClient) { }

  addVen(Local, Art, PrecB, PrecL, Tot) {
    const obj = {
      Local,
      Art,
      PrecB,
      PrecL,
      Tot
    };
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
  }

}
