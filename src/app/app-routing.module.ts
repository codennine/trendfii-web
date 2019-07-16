import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForumComponent } from './components/common/forum/forum.component';
import { NewsComponent } from './components/common/news/news.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { IposComponent } from './pages/ipos/ipos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent, pathMatch: 'full'},
  {path: 'ipos', component: IposComponent, pathMatch: 'full'},
  {
    path: ':stock', component: ProfileComponent,
    children: [
      {path:'', component: NewsComponent},
      {path: 'forum', component: ForumComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
