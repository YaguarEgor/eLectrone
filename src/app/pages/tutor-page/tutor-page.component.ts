import { GetTutorInfoService } from './../../data/services/get-tutor-info.service';
import { ActivatedRoute } from '@angular/router';
import { GetTutorsService } from '../../data/services/get-tutors.service';
import { Component, inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Tutor } from '../../data/interfaces/tutor-interface';
import { FootageComponent } from '../../common_ui/footage/footage.component';


@Component({
  selector: 'app-tutor-page',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, CommonModule, FootageComponent],
  templateUrl: './tutor-page.component.html',
  styleUrl: './tutor-page.component.scss'
})
export class TutorPageComponent {
  getTutorInfoService = inject(GetTutorInfoService)
  route = inject(ActivatedRoute)

  tutor$ = this.route.params
    .pipe(
    switchMap(({id}) => {
      console.log(typeof id)
      return this.getTutorInfoService.getTutorInfo(id)
    })
  )

}
