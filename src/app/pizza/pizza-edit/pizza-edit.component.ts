import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {
  pizza: Pizza;
  pizzaForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private pizzaService: PizzaService,
    private router: Router) {
    this.pizzaForm = this.formBuilder.group({
      'name': '',
      'description': '',
      'grade': '',
      'price': ''
    });
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.params.id);
   
    if (id) {
      this.pizzaService.get(id).subscribe(
        data => {
          this.pizza = data
          this.pizzaForm.patchValue(this.pizza)
        }
      )
    }
  }

  onSubmit() {
    let submitedPizza: Pizza = new Pizza(this.pizzaForm.value);
    if (this.pizza && this.pizza._id) {
      submitedPizza._id = this.pizza._id
      this.pizzaService.update(submitedPizza).subscribe(
        pizza => {          
          this.pizzaForm.reset();
          this.router.navigate(['/pizzas'])
        }
      )
    } else {
      this.pizzaService.add(submitedPizza).subscribe(
        pizza => {
          this.pizzaForm.reset()
          this.router.navigate(['/pizzas'])
        }
      )
    }
  }


}
