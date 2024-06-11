import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';

@Component({
  selector: 'app-products-category-menu',
  templateUrl: './products-category-menu.component.html',
  styleUrl: './products-category-menu.component.css'
})
export class ProductsCategoryMenuComponent implements OnInit {

  productCategories:ProductCategory[]=[];

  constructor(){

  }

  ngOnInit() {

    
  }
}
