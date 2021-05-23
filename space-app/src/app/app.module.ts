import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlackHoleComponent } from './black-hole/black-hole.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SidenavComponent,
    BlackHoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaceModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
