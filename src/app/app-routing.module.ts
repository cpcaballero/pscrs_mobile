import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./public/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./public/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./member/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'surgical-videos',
    loadChildren: () => import('./member/surgical-videos/surgical-videos.module').then( m => m.SurgicalVideosPageModule)
  },
  {
    path: 'lectures',
    loadChildren: () => import('./member/lectures/lectures.module').then( m => m.LecturesPageModule)
  },
  {
    path: 'tech-news',
    loadChildren: () => import('./member/tech-news/tech-news.module').then( m => m.TechNewsPageModule)
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./member/marketplace/marketplace.module').then( m => m.MarketplacePageModule)
  },
  {
    path: 'about-pscrs',
    loadChildren: () => import('./member/about-pscrs/about-pscrs.module').then( m => m.AboutPscrsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./public/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./public/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'initial',
    loadChildren: () => import('./public/initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'experts',
    loadChildren: () => import('./member/experts/experts.module').then( m => m.ExpertsPageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./member/profile-settings/profile-settings.module').then( m => m.ProfileSettingsPageModule)
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./member/feedbacks/feedbacks.module').then( m => m.FeedbacksPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
