import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';

import { Product } from '../../../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../../interfaces/APIresponse';


@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProductListComponent implements OnInit {

  constructor(private api:ApiService) { }
  products: Product[] =[]


  async ngOnInit(){
      this.getAllProducts();
    }

  getAllProducts(){
   this.api.selectAll("product").then((res:ApiResponse) =>{
        if(res.status === 200){
          this.products = res.data;
        }
        else{
          console.log(res.message);
        }});
  }
}