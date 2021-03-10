import { Pizza } from "./pizza.model";

export class PizzaSearchResult {
    pizzas: Pizza[];
    count: number;

    constructor(obj?: any) {
        this.pizzas = obj && obj.results.map(
            elem => {
                return new Pizza(elem)
            }            
        )
        || [];

        this.count = obj && obj.count || null;
    }
}