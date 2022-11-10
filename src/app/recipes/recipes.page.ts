import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Recipe 01',
      imageUrl: 'http://www.homeit.com.br/wp-content/uploads/2022/08/Receita-de-Macarrao-de-Quatro-Queijos.png',
      ingredientes: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    },
    {
      id: '2',
      title: 'Recipe 02',
      imageUrl: 'data:image/jpeg;base64,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',
      ingredientes: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
