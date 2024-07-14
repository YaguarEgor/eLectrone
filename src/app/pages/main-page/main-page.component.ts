import { Component } from '@angular/core';
import { MenuComponent } from '../../common_ui/menu/menu.component';
import { FeedbackItemComponent } from '../../common_ui/feedback-item/feedback-item.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuComponent, FeedbackItemComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
