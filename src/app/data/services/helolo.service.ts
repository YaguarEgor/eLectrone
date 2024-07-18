import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeloloService {

  http = inject(HttpClient)

  constructor() { }

  getHelolo() {
    return this.http.get('http://127.0.0.1:8000/')
  }
}
