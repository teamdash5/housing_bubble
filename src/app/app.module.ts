import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesService } from './stories/stories.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryBuilderComponent } from './story-builder/story-builder.component';
import { StoryBuilderService } from './story-builder/story-builder.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CustomMaterialImportModule } from './custom-material-import/custom-material-import.module';
import 'hammerjs';
import { LifeTimeQuestionComponent } from './life-time-question/life-time-question.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryBoardComponent,
    StoriesComponent,
    PageNotFoundComponent,
    StoryBuilderComponent,
    LifeTimeQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialImportModule,
    Ng2PageScrollModule.forRoot(),
  ],
  providers: [StoriesService, StoryBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
