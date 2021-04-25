import { HashtagFormComponent } from './hashtag/hashtag-form/hashtag-form.component';
import { HashtagListComponent } from './hashtag/hashtag-list/hashtag-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HashtagListComponent },
  { path: 'new', component: HashtagFormComponent },
  { path: 'edit/:id', component:HashtagFormComponent },
  { path: 'watson/:hashtag', component:HashtagFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
