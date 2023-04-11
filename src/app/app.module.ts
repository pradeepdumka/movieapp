import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent,FooterComponent } from '@components';
import { HomeComponent ,} from '@pages';

import { EnvConfig } from '@configs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 

import {MatSnackBarModule} from '@angular/material/snack-bar';
 
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from '@pipes';
import { NotFoundComponent } from './components/not-found/not-found.component';
export function initializeApp(appConfig:EnvConfig ) {
  return () => appConfig.loadEnvironments();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    FilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    AppRoutingModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [
    EnvConfig,
    FilterPipe,
    {
      provide:APP_INITIALIZER,
      useFactory:initializeApp,
      deps: [EnvConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
