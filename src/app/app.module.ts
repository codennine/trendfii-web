import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TrendsComponent } from './components/common/trends/trends.component';
import { ForumComponent } from './components/common/forum/forum.component';
import { RelatedComponent } from './components/common/related/related.component';
import { NewsComponent } from './components/common/news/news.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { IposComponent } from './pages/ipos/ipos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TrendsComponent,
    ForumComponent,
    RelatedComponent,
    NewsComponent,
    ListagemComponent,
    IposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
