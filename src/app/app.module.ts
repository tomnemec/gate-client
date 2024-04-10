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
import { NotificationComponent } from './components/notification/notification.component';
import { QrCodeGeneratorComponent } from './pages/qr-code-generator/qr-code-generator.component';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    VisitPageComponent,
    ScanSlideComponent,
    NavbarComponent,
    VisitorSlideComponent,
    StepperComponent,
    TrainingSlideComponent,
    NotificationComponent,
    QrCodeGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    QrCodeModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'visits', component: VisitPageComponent, pathMatch: 'full' },
      {
        path: 'qr-generator',
        component: QrCodeGeneratorComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
