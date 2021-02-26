import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/initial',
    pathMatch: 'full'
  },
  {
    path: 'public/login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'public/signup',
    loadChildren: () => import('./public/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'public/forgot',
    loadChildren: () => import('./public/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'member/dashboard',
    loadChildren: () => import('./member/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'member/surgical-videos',
    loadChildren: () => import('./member/surgical-videos/surgical-videos.module').then( m => m.SurgicalVideosPageModule)
  },
  {
    path: 'member/lectures',
    loadChildren: () => import('./member/lectures/lectures.module').then( m => m.LecturesPageModule)
  },
  {
    path: 'member/tech-news',
    loadChildren: () => import('./member/tech-news/tech-news.module').then( m => m.TechNewsPageModule)
  },
  {
    path: 'member/marketplace',
    loadChildren: () => import('./member/marketplace/marketplace.module').then( m => m.MarketplacePageModule)
  },
  {
    path: 'member/about-pscrs',
    loadChildren: () => import('./member/about-pscrs/about-pscrs.module').then( m => m.AboutPscrsPageModule)
  },
  {
    path: 'public/contact-us',
    loadChildren: () => import('./public/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./public/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'public/initial',
    loadChildren: () => import('./public/initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'member/experts',
    loadChildren: () => import('./member/experts_module/experts/experts.module').then( m => m.ExpertsPageModule)
  },
  {
    path: 'member/profile-settings',
    loadChildren: () => import('./member/profile-settings/profile-settings.module').then( m => m.ProfileSettingsPageModule)
  },
  {
    path: 'member/feedbacks',
    loadChildren: () => import('./member/feedbacks/feedbacks.module').then( m => m.FeedbacksPageModule)
  },
  {
    path: 'member/connect',
    loadChildren: () => import('./member/connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'member/expert-messages',
    loadChildren: () => import('./member/experts_module/expert-messages/expert-messages.module').then( m => m.ExpertMessagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
