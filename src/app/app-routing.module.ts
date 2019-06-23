import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsPrivacyComponent } from './components/terms-privacy/terms-privacy.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { WeComponent } from './components/we/we.component';
import { TrainingOptionComponent } from './components/training-option/training-option.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundCancellationComponent } from './components/refund-cancellation/refund-cancellation.component';
import { AntiSpamComponent } from './components/anti-spam/anti-spam.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'category',component:CategoryDetailComponent},
  {path:'faq',component:FaqComponent},
  {path:'terms',component:TermsPrivacyComponent},
  {path:'speaker',component:SpeakerComponent},
  {path:'we',component:WeComponent},
  {path:'training-option',component:TrainingOptionComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'refund-cancellation',component:RefundCancellationComponent},
  {path:'anti-spam-policy',component:AntiSpamComponent},
  {path:'disclaimer',component:DisclaimerComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
