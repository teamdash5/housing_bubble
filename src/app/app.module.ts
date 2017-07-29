import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { StoriesComponent } from './stories/stories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifeTimeRequestComponent } from './life-time-request/life-time-request.component';
import { RouterModuleModule } from './router-module/router-module.module';

@NgModule({
  declarations: [
    AppComponent,
    StoryBoardComponent,
    StoriesComponent,
    PageNotFoundComponent,
    LifeTimeRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
