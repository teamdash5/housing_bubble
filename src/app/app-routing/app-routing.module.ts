import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { StoryBoardComponent } from '../story-board/story-board.component';
import { StoriesComponent } from '../stories/stories.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { StoryBuilderComponent } from '../story-builder/story-builder.component';

const appRoutes: Routes = [
  { path: 'stories', component: StoriesComponent },
  { path: 'buildyourstories', component: StoryBuilderComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/buildyourstories',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
