import { OrderPositionsComponent } from './order-page/order-positions/order-positions.component';
import { OrderCategoriesComponent } from './order-page/order-categories/order-categories.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent }
    ]
  },
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewPageComponent },
      { path: 'analitycs', component: AnalyticsPageComponent },
      { path: 'history', component: HistoryPageComponent },
      {
        path: 'order', component: OrderPageComponent, children: [
          { path: '', component: OrderCategoriesComponent },
          { path: ':id', component: OrderPositionsComponent }
        ]
      },
      { path: 'categories', component: CategoriesPageComponent },
      { path: 'categories/new', component: CategoriesFormComponent },
      { path: 'categories/:id', component: CategoriesFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
