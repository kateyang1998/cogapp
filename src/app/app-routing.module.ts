import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SermonsComponent } from './sermons/sermons.component';
import { BiblestudyComponent } from './biblestudy/biblestudy.component';
import { PraiseandworshipComponent } from './praiseandworship/praiseandworship.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sermons', component: SermonsComponent },
  { path: 'biblestudy', component: BiblestudyComponent },
  { path: 'praiseandworship', component: PraiseandworshipComponent },  
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }