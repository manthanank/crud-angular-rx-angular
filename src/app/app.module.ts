import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostListComponent,
    PostEditComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
