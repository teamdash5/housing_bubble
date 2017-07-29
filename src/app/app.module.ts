import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { StoriesComponent } from './stories/stories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryBuilderComponent } from './story-builder/story-builder.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StoryBoardComponent,
    StoriesComponent,
    PageNotFoundComponent,
    StoryBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
