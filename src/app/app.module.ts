import { KeyRentalComponent } from './pages/key-rental/key-rental.component';
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
import { QRCodeModule } from 'angularx-qrcode';
import { VisitsOverviewComponent } from './pages/visits-overview/visits-overview.component';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeyScanComponent } from './components/key-scan/key-scan.component';
import { KeyFormComponent } from './components/key-form/key-form.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitPageComponent,
    ScanSlideComponent,
    KeyRentalComponent,
    KeyScanComponent,
    KeyFormComponent,
    HomeComponent,
    NavbarComponent,
    VisitorSlideComponent,
    VisitsOverviewComponent,
    StepperComponent,
    PaginatorComponent,
    TrainingSlideComponent,
    NotificationComponent,
    QrCodeGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'visits', component: VisitPageComponent, pathMatch: 'full' },
      {
        path: 'qr-generator',
        component: QrCodeGeneratorComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'visits-overview',
        component: VisitsOverviewComponent,
        pathMatch: 'full',
      },
      {
        path: 'key-rental',
        component: KeyRentalComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
