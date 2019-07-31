import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
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
import { WeComponent } from './components/we/we.component';
import { TrainingOptionComponent } from './components/training-option/training-option.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundCancellationComponent } from './components/refund-cancellation/refund-cancellation.component';
import { AntiSpamComponent } from './components/anti-spam/anti-spam.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { SpeakerDetailComponent } from './components/speaker-detail/speaker-detail.component';
import { ProduuctDetailComponent } from './components/produuct-detail/produuct-detail.component';
import { CustomerQuesAnsComponent } from './components/speaker-dashboard/customer-ques-ans/customer-ques-ans.component';
import { BookComponent } from './components/speaker-dashboard/book/book.component';
import { BlogComponent } from './components/speaker-dashboard/blog/blog.component';
import { WebinarComponent } from './components/speaker-dashboard/webinar/webinar.component';
import { SpeakerHomeComponent } from './components/speaker-dashboard/speaker-home/speaker-home.component';
import { SeriesComponent } from './components/speaker-dashboard/series/series.component';
import { MysaleComponent } from './components/speaker-dashboard/mysale/mysale.component';

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
    TermsPrivacyComponent,
    WeComponent,
    TrainingOptionComponent,
    PrivacyPolicyComponent,
    RefundCancellationComponent,
    AntiSpamComponent,
    DisclaimerComponent,
    SpeakerDetailComponent,
    ProduuctDetailComponent,
    CustomerQuesAnsComponent,
    BookComponent,
    BlogComponent,
    WebinarComponent,
    SpeakerHomeComponent,
    SeriesComponent,
    MysaleComponent,
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
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
