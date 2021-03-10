import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../model/pizza.model';
import { PizzaSearchResult } from '../model/pizzaSearchResult';

const baseUrl = "http://localhost:3000/api/pizzas";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PizzaSearchResult> {
    return this.http.get(baseUrl).pipe(map(
      response => {
        return new PizzaSearchResult(response)
      }
    ))
  }


  get(id: number): Observable<Pizza> {
    return this.http.get(baseUrl + "/" + id).pipe(map(
      response => {
        return new Pizza(response)
      }
    ))
  }

  add(newPizza: Pizza): Observable<Pizza> {
    return this.http.post(baseUrl, newPizza).pipe(map(
      response => {
        return new Pizza(response)
      }
    ))
  }

  update(editedPizza: Pizza): Observable<Pizza> {
    return this.http.put(baseUrl + "/" + editedPizza._id, editedPizza).pipe(map(
      response => {
        return new Pizza(response)
      }
    ))
  }

  remove(id: number): Observable<Pizza> {
    return this.http.delete(baseUrl + "/" + id).pipe(map(
      response => {
        return new Pizza(response)
      }
    ))
  }
}
