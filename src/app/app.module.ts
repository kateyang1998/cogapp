import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SermonsComponent } from './sermons/sermons.component';
import { BiblestudyComponent } from './biblestudy/biblestudy.component';
import { PraiseandworshipComponent } from './praiseandworship/praiseandworship.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SermonsComponent,
    BiblestudyComponent,
    PraiseandworshipComponent,
    NavComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
