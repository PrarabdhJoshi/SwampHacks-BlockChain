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
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import {FormsModule} from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
const appRoutes: Routes = [
  { path: 'request-inspection', component: RequestInspectionComponent},
  {path: 'farmer', component:FarmerPageComponent},
  {path: 'transaction', component:TransactionComponent},
  
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
    HomeComponent,
    FarmerPageComponent,
    TransactionComponent
  ],
  imports: [
    
    BrowserModule,
    MatToolbarModule,
    HttpModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
