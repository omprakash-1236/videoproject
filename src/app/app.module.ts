import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FaqComponent } from './components/faq/faq.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TermsPrivacyComponent } from './components/terms-privacy/terms-privacy.component';
import { SpeakerComponent } from './components/speaker/speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryDetailComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    SidebarComponent,
    SpeakerComponent,
    TermsPrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
