import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { ApiResponse } from '../../../../interfaces/APIresponse';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../interfaces/product';
import { Category } from '../../../../interfaces/category';


@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class ProductFormComponent {

    id:number | undefined = undefined;
  
    NewProduct:Product = {
      termekID: 0,
      categoryID: 0,
      nev: "",
      egyseg : "" ,
      ar:0
    }
    NewCategory:Category = {
          id: 0,
          categoryName: ''
      }
    router: any;
    constructor(
      private api:ApiService,
      private activatedRoute: ActivatedRoute  
    ) { }
  
    allProducts:Product[] = [];
    allCategories:Category[] = [];

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.api.select('product', this.id).then((res:ApiResponse)=>{
          this.NewProduct = res.data[0];
          
        })
      }
      this.getAllProducts();
      this.getAllCategories();
    }
  
    getAllProducts(){
      this.api.selectAll('product').then((res:ApiResponse)=>{
        this.allProducts = res.data;
      })

    }
    getAllCategories(){
      this.api.selectAll('categories').then((res:ApiResponse)=>{
        this.allCategories = res.data;
    })}
  
    save(){
      if(this.NewProduct.nev == "" || this.NewProduct.egyseg =="" || this.NewProduct.ar <=0 || this.NewProduct.categoryID==0){
        alert("Kérem töltse ki az adatokat helyesen!");
        return;
      }
      let idx = this.allProducts.findIndex(item => item.nev.toLowerCase() == this.NewProduct.nev.toLowerCase() && item.termekID != this.NewProduct.termekID);
      if(idx != -1){
        alert("Ilyen nevű kategória már létezik!");
        return;
      }
      if(!this.id){
        this.api.insert('product', this.NewProduct).then((res:ApiResponse)=>{
          alert(res.message);
          this.NewProduct = {
            termekID: 0,
            categoryID: 0,
            nev: "",
            egyseg : "" ,
            ar:0
          }
          this.getAllProducts();
          
      });}
      else{
        this.api.update('product',this.id, this.NewProduct ).then((res:ApiResponse)=>{
          if(res.status ===200){
            alert(res.message);
            this.router.navigate(['/product']);
  
          }
          else{
            alert(res.message);
          }
      })
    }}
}
