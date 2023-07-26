import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({  
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('A Test Recipe','Test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  constructor(){}

  ngOnInit() {

  }
}
