import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tutor } from '../interfaces/tutor-interface';

@Injectable({
  providedIn: 'root'
})
export class GetTutorsService {

  http = inject(HttpClient)

  constructor() { }

  get_tutors() {
    return this.http.get<Tutor[]>('http://127.0.0.1:8000/tutors/')
  }
}
