import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface Statistics{
  usersCount:number;
  productsCount:number;
  salesSum:number;
  priceSum:number;
  products:Product[];
}

interface Product{
  termek:string;
  count:number;
  price:number;
}

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss'
})
export class StatComponent {
   constructor(private api:ApiService) { }
  /* statistics:Statistics=[];

   





    

   async ngOnInit(){
      this.getStatistics();
    }
    getStatistics(){
      this.api.selectAll("statistics").then((res:any) =>{
        if(res.status === 200){
          this.statistics = res.data;
          console.log(this.statistics);
        }
        else{
          console.log(res.message);
        }});
    }*/
   
}
