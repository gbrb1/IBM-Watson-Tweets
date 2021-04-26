import { HashtagFormComponent } from './hashtag/hashtag-form/hashtag-form.component';
import { HashtagListComponent } from './hashtag/hashtag-list/hashtag-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatsonComponent } from './hashtag/watson/watson.component';


const routes: Routes = [ //mapeando as rotas
  { path: '', component: HashtagListComponent },
  { path: 'new', component: HashtagFormComponent },
  { path: 'edit/:id', component:HashtagFormComponent },
  { path: 'watson/:id', component:WatsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
