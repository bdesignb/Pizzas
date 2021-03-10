import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
   this.refreshPizza()
  }

  refreshPizza(){
     this.pizzaService.getAll().subscribe(
      data => {
        this.pizzas = data.pizzas;
      }
    )

  }

  onRemovePizzaList(id: number){
    this.pizzaService.remove(id).subscribe(
      pizza => {
        pizza
        this.refreshPizza()
      }
    )
    console.log("iz pizza list ", id)
  }

}
