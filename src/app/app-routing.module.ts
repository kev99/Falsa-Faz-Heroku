import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShowsComponent } from './shows/shows.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
{path: '' , component: WelcomeComponent},
{path: 'welcome' , component: WelcomeComponent},
{path: 'home' , component: StartComponent},
{path: 'history', component : HistoryComponent},
{path: 'contact', component : ContactComponent},
{path: 'albums', component : AlbumsComponent},
{path: 'photos', component : PhotosComponent},
{path: 'videos', component : VideosComponent},
{path: 'shows', component : ShowsComponent},
{path: 'shop', component : ShopComponent},
{ path: '**', component: PageNotFoundComponentComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [WelcomeComponent , StartComponent, PageNotFoundComponentComponent,  HistoryComponent, VideosComponent,
  PhotosComponent, ShopComponent, AlbumsComponent,  ShowsComponent, ContactComponent ]
