import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagListComponent } from './hashtag/hashtag-list/hashtag-list.component';
import { HashtagListItemComponent} from './hashtag/hashtag-list-item/hashtag-list-item.component';
import { HashtagFormComponent } from './hashtag/hashtag-form/hashtag-form.component';
import { WatsonComponent } from './hashtag/watson/watson.component';

@NgModule({
  declarations: [
    AppComponent,
    HashtagListComponent,
    HashtagListItemComponent,
    HashtagFormComponent,
    WatsonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
