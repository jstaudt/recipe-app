import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simply a test', 'https://goo.gl/U0vT94'),
    new Recipe('Test Recipe', 'Simply a test', 'https://goo.gl/U0vT94')
  ];

  constructor() { }

  ngOnInit() {
  }
}
