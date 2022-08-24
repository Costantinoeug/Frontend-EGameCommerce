import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { LoggedComponent } from './logged/logged.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddGameComponent } from './add-game/add-game.component';
import { CartComponent } from './cart/cart.component';
import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'Games',        component: GamesComponent },
  { path: 'Logged',         component: LoggedComponent,       canActivate: [AuthGuard],  data: { roles: ["user-role","admin-role"] }},
  { path: 'Cart',         component: CartComponent,       canActivate: [AuthGuard],  data: { roles: ["user-role"] }},
  { path: 'Bookings',     component: BookingsComponent,   canActivate: [AuthGuard],  data: { roles: ["user-role"] } },
  { path: 'Purchases',        component: PurchasesComponent, canActivate: [AuthGuard], data: {roles: ["user-role"]} },
  { path: 'AddGame',      component: AddGameComponent,    canActivate: [AuthGuard],  data: { roles: ["admin-role"] } },
  { path: '**',
    redirectTo: '/Games',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
