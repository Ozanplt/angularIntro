import { Component, OnInit } from '@angular/core';
import Product from '../models/productListModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Elma",
      categoryId: 1,
      unitPrice: 40,
      unitInStock: 50
    },
    {
      id: 2,
      name: "Armut",
      categoryId: 1,
      unitPrice: 40,
      unitInStock: 50
    },
    {
      id: 3,
      name: "Karpuz",
      categoryId: 2,
      unitPrice: 40,
      unitInStock: 50
    },
    {
      id: 4,
      name: "Üzüm",
      categoryId: 2,
      unitPrice: 40,
      unitInStock: 50
    },
    {
      id: 5,
      name: "İncir",
      categoryId: 2,
      unitPrice: 40,
      unitInStock: 50
    },
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
