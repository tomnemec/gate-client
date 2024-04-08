import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitPageComponent } from './pages/visit-page/visit-page.component';
import { ApiClientService } from './services/api-client.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, VisitPageComponent],
  imports: [
    BrowserModule,
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
