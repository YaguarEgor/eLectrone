import { Tutor } from './../../data/interfaces/tutor-interface';
import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../common_ui/menu/menu.component';
import { FeedbackItemComponent } from '../../common_ui/feedback-item/feedback-item.component';
import { Feedback } from '../../data/interfaces/feedback-interface';
import { GetFeedbacksService } from '../../data/services/get-feedbacks.service';
import { JsonPipe } from '@angular/common';
import { FootageComponent } from '../../common_ui/footage/footage.component';
import { RouterLink } from '@angular/router';
import { TutorCardComponent } from '../../common_ui/tutor-card/tutor-card.component';
import { GetTutorsService } from '../../data/services/get-tutors.service';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuComponent, FeedbackItemComponent, JsonPipe, FootageComponent, RouterLink, TutorCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  getFeedbacksService = inject(GetFeedbacksService)
  feedbacks: Feedback[] = []

  getTutorsService = inject(GetTutorsService)
  tutors: Tutor[] = []


  constructor() {

    this.getFeedbacksService.get_feedbacks().subscribe(
      val => {this.feedbacks = val}
    )

    this.getTutorsService.get_tutors().subscribe(
      val => {this.tutors = val}
    )
  }
}
