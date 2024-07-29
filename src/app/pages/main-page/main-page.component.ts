import { GetTutorsService } from './../../data/services/get-tutors.service';
import { TutorCardComponent } from './../../common_ui/tutor-card/tutor-card.component';
import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../common_ui/menu/menu.component';
import { FeedbackItemComponent } from '../../common_ui/feedback-item/feedback-item.component';
import { Feedback } from '../../data/interfaces/feedback-interface';
import { GetFeedbacksService } from '../../data/services/get-feedbacks.service';
import { JsonPipe } from '@angular/common';
import { Tutor } from '../../data/interfaces/tutor-interface';
import { RouterModule } from '@angular/router';
import { FootageComponent } from "../../common_ui/footage/footage.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuComponent, FeedbackItemComponent, JsonPipe, TutorCardComponent, RouterModule, FootageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  getFeedbacksService = inject(GetFeedbacksService)
  getTutorsService = inject(GetTutorsService)

  feedbacks: Feedback[] = []
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
