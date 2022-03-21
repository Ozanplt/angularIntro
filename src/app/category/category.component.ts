import { Component, OnInit } from '@angular/core';
import { Listbox } from 'primeng/listbox';
import Category from '../models/categoryListModel';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  constructor() { }

  ngOnInit(): void {
    this.selectedComponentCategory();

  }

  selectedComponentCategory(){
    this.categories = [
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },
      {name: 'Meyve', id:2 },
      {name: 'Sebze', id:1 },


  ];
  }

}
