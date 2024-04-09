import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitPageComponent } from './pages/visit-page/visit-page.component';
import { ApiClientService } from './services/api-client.service';
import { FormsModule } from '@angular/forms';
import { ScanSlideComponent } from './components/scan-slide/scan-slide.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VisitorSlideComponent } from './components/visitor-slide/visitor-slide.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TrainingSlideComponent } from './components/training-slide/training-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitPageComponent,
    ScanSlideComponent,
    NavbarComponent,
    VisitorSlideComponent,
    StepperComponent,
    TrainingSlideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'visits', component: VisitPageComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
