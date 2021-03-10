import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import { PizzaEditComponent } from './pizza/pizza-edit/pizza-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes :Routes = [
  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzas/add', component: PizzaEditComponent},
  {path: 'pizzas/:id', component: PizzaEditComponent},
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    PizzaEditComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
