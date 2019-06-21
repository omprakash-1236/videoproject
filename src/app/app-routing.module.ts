import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsPrivacyComponent } from './components/terms-privacy/terms-privacy.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'category',component:CategoryDetailComponent},
  {path:'faq',component:FaqComponent},
  {path:'terms-and-privacy',component:TermsPrivacyComponent},
  {path:'speaker',component:SpeakerComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
