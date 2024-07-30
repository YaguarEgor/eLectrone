import { Component, Input } from '@angular/core';
import { Tutor } from '../../data/interfaces/tutor-interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tutor-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './tutor-card.component.html',
  styleUrl: './tutor-card.component.scss'
})
export class TutorCardComponent {
  @Input() tutor!: Tutor;
}
