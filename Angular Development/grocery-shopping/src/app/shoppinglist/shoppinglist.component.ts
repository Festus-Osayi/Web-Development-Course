import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
@Component({
  selector: 'shopping-list',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppingList implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];
  constructor() {}
  ngOnInit() {}
}
