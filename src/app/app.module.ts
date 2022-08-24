
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingsComponent } from './bookings/bookings.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GamesFormComponent } from './games-form/games-form.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/tokenInterceptor';
import { GameDetailComponent } from './game-detail/game-detail/game-detail.component';
import { LoggedComponent } from './logged/logged.component';
import { BookingDetailComponent } from './bookings/booking-detail/booking-detail/booking-detail.component';
import { GicDetailComponent } from './cart/gic-detail/gic-detail/gic-detail.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { PurchaseDetailComponent } from './purchases/purchases/purchase-detail/purchase-detail/purchase-detail.component';
import { PurchasedGameDetailComponent } from './purchases/purchases/purchase-detail/purchase-detail/purchased-game-detail/purchased-game-detail/purchased-game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    GamesComponent,
    BookingsComponent,
    AddGameComponent,
    GamesFormComponent,
    GameDetailComponent,
    LoggedComponent,
    BookingDetailComponent,
    GicDetailComponent,
    PurchasesComponent,
    PurchaseDetailComponent,
    PurchasedGameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
