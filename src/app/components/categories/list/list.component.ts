import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Category } from '../../../../interfaces/category';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../../interfaces/APIresponse';
 


@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})



export class CategoryListComponent implements OnInit {
 
  constructor(private api:ApiService) { }

  categories: Category[] =[]


   async ngOnInit(){
      this.getAllCategories();
    }
    delete(id:number){
      if(confirm("Biztosan törölni szeretnéd a kategóriát?")){
        this.api.delete("categories", id).then((res:ApiResponse)=>{
          if(res.status === 200){
            this.categories = this.categories.filter(item => item.id != id);
          }
          
        });
      }
      else{
        alert("A kategória törlése megszakítva!");
      }
    }
    getAllCategories(){
      this.api.selectAll("categories").then((res:ApiResponse) =>{
        if(res.status === 200){
          this.categories = res.data;
        }
        else{
          console.log(res.message);
        }});
    }
}