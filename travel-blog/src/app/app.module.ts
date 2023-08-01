import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    UserService,
    storageServiceProvider,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
