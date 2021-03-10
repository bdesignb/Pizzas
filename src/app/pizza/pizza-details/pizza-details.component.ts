import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() emmitter: EventEmitter<number> = new EventEmitter();


  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  // onRemove(id: number) {
  //   this.pizzaService.remove(id).subscribe(
  //     pizza => {
  //       pizza
  //     }
  //   )
  // }

  onRemove(id: number) {
    this.emmitter.emit(id)
    console.log(this.emmitter)
  }

}
