import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../common_ui/menu/menu.component';
import { FeedbackItemComponent } from '../../common_ui/feedback-item/feedback-item.component';
import { Feedback } from '../../data/interfaces/feedback-interface';
import { GetFeedbacksService } from '../../data/services/get-feedbacks.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuComponent, FeedbackItemComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  getFeedbacksService = inject(GetFeedbacksService)
  feedbacks: Feedback[] = []

  constructor() {

    this.getFeedbacksService.get_feedbacks().subscribe(
      val => {this.feedbacks = val}
    )
  }
}
