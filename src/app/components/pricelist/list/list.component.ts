import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

import { ApiResponse } from '../../../../interfaces/APIresponse';
import { Price } from '../../../../interfaces/price';

@Component({
  selector: 'app-pricelist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class PriceListComponent {
   constructor(private api:ApiService) { }
    prices: Price[] =[]
  
  
    async ngOnInit(){
        this.getAllPrices();
      }
  
    getAllPrices(){
     this.api.selectAll("price").then((res:ApiResponse) =>{
          if(res.status === 200){
            this.prices = res.data;
          }
          else{
            console.log(res.message);
          }});
    }
}
