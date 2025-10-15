import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../interfaces/category';
import { ApiResponse } from '../../../../interfaces/APIresponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoryform',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CategoryFormComponent {

  id:number | undefined = undefined;

  NewCategory:Category = {
    id: 0,
    categoryName: ''
  }
  router: any;
  constructor(
    private api:ApiService,
    private activatedRoute: ActivatedRoute  
  ) { }

  allCategories:Category[] = [];
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('categories', this.id).then((res:ApiResponse)=>{
        this.NewCategory = res.data[0];
      })
    }
    this.getAllCategories();
  }

  getAllCategories(){
    this.api.selectAll('categories').then((res:ApiResponse)=>{
      this.allCategories = res.data;
    })
  }

  save(){
    if(this.NewCategory.categoryName == ""){
      alert("A kategória neve nem lehet üres!");
      return;
    }
    let idx = this.allCategories.findIndex(item => item.categoryName.toLowerCase() == this.NewCategory.categoryName.toLowerCase() && item.id != this.NewCategory.id);
    if(idx != -1){
      alert("Ilyen nevű kategória már létezik!");
      return;
    }
    if(!this.id){
      this.api.insert('categories', this.NewCategory).then((res:ApiResponse)=>{
        alert(res.message);
        this.NewCategory = {
          id: 0,
          categoryName: ''
        }
        this.getAllCategories();
        
      }
      );
    }
    else{
      this.api.update('categories',this.id, this.NewCategory ).then((res:ApiResponse)=>{
        if(res.status ===200){
          alert(res.message);
          this.router.navigate(['/categories']);

        }
        else{

        }

    })
    
  }


 
  }
}
