import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RequestInspectionComponent } from './request-inspection/request-inspection.component';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule, Routes } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'request-inspection', component: RequestInspectionComponent},
  
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RequestInspectionComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent
  ],
  imports: [
    
    BrowserModule,
    MatToolbarModule,
    MatChipsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
