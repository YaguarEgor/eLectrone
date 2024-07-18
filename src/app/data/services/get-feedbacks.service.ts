import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Feedback } from '../interfaces/feedback-interface';

@Injectable({
  providedIn: 'root'
})
export class GetFeedbacksService {

  http = inject(HttpClient)

  constructor() { }

  get_feedbacks() {
    return this.http.get<Feedback[]>("http://127.0.0.1:8000/feedbacks/")
  }
}
