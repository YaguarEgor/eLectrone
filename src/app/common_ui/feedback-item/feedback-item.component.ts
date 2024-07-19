import { Component, Input } from '@angular/core';
import { Feedback } from '../../data/interfaces/feedback-interface';

@Component({
  selector: 'app-feedback-item',
  standalone: true,
  imports: [],
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.scss'
})
export class FeedbackItemComponent {
  @Input() feedback!: Feedback;


}
