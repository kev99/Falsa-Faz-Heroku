import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShowsComponent } from './shows/shows.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent  } from './app.component';
import { BarnavComponent } from './barnav/barnav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumsComponent } from './albums/albums.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BarnavComponent,
    WelcomeComponent,
    HistoryComponent,
    ContactComponent,
    ShopComponent,
    ShowsComponent,
    VideosComponent,
    PhotosComponent,
    AlbumsComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
