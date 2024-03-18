import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "login" , pathMatch: "full"
  },
  {
    path: "login", loadChildren : () => import("./pages/auth/auth.module").then( (m) => m.AuthModule )
  },
  {
    path: "products", loadChildren : () => import("./pages/products/products.module").then( (m) => m.ProductsModule), canActivate: [AuthGuard]
  },
  {
    path: "carts", loadChildren : () => import("./pages/carts/carts.module").then( (m) => m.CartsModule), canActivate: [AuthGuard]
  },
  {
    path: "**", redirectTo: "login" , pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


