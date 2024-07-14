import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../../common_ui/profile-header/profile-header.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
