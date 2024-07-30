import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MenuComponent } from './common_ui/menu/menu.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TutorPageComponent } from './pages/tutor-page/tutor-page.component';

export const routes: Routes = [
    {path: "", component: MenuComponent, children: [
        {path: "", component: MainPageComponent},
        {path: "profile", component: ProfilePageComponent},
        {path: "tutors/:id", component: TutorPageComponent}
    ]}

];
