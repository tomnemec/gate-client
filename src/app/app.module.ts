import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { KeyRentalComponent } from './pages/key-rental/key-rental.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogPopupComponent } from './components/dialog-popup/dialog-popup.component';
import { KeyFormComponent } from './components/key-form/key-form.component';
import { KeyScanComponent } from './components/key-scan/key-scan.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ScanSlideComponent } from './components/scan-slide/scan-slide.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TrainingSlideComponent } from './components/training-slide/training-slide.component';
import { VisitorSlideComponent } from './components/visitor-slide/visitor-slide.component';
import { HomeComponent } from './pages/home/home.component';
import { KeyRentalsOverviewComponent } from './pages/key-rentals-overview/key-rentals-overview.component';
import { QrCodeGeneratorComponent } from './pages/qr-code-generator/qr-code-generator.component';
import { VisitPageComponent } from './pages/visit-page/visit-page.component';
import { VisitsOverviewComponent } from './pages/visits-overview/visits-overview.component';
import { ApiClientService } from './services/api-client.service';
import { SettingsComponent } from './pages/settings/settings.component';
import { KeysAdministrationComponent } from './pages/keys-administration/keys-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogPopupComponent,
    VisitPageComponent,
    ScanSlideComponent,
    KeyRentalComponent,
    KeyRentalsOverviewComponent,
    KeysAdministrationComponent,
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
    SettingsComponent,
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
      {
        path: 'key-rentals-overview',
        component: KeyRentalsOverviewComponent,
        pathMatch: 'full',
      },
      {
        path: 'key-administration',
        component: KeysAdministrationComponent,
        pathMatch: 'full',
      },
      {
        path: 'settings',
        component: SettingsComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
