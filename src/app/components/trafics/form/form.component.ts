import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiResponse } from '../../../../interfaces/APIresponse';
import { Category } from '../../../../interfaces/category';
import { Product } from '../../../../interfaces/product';

interface Trafic{
  id:number
  termek:string
  vevo:string
  kategoriaId:number
  categoryName:string
  egyseg:string
  nettoar:number
  mennyiseg:number
  kiadva:number
}

@Component({
  selector: 'app-traficform',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TraficFormComponent {
  
  id:number | undefined = undefined;
  NewCategory:Category = {
      id: 0,
      categoryName: ''
  }
  newTraffic:Trafic={
    id:0,
    termek:"",
    vevo:"",
    kategoriaId:0,
    categoryName :"",
    egyseg:"",
    nettoar:0,
    mennyiseg:0,
    kiadva:0
  }
  NewProduct:Product={
    termekID: 0,
    categoryID: 0,
    nev: "",
    egyseg : "" ,
    ar:0
  }
  router: any;
  constructor(
    private api:ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  allTraffics:Trafic[] = [];
  allCategories:Category[] = [];
  AllProducts:Product[] =[]

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('trafics', this.id).then((res:ApiResponse)=>{
        this.newTraffic = res.data[0];
      })
    }
    this.getAllTraffics();
    this.getAllCategories();
    this.getAllProducts();
    }
    getAllTraffics(){
      this.api.selectAll('trafics').then((res:ApiResponse)=>{
        this.allTraffics = res.data;
    })}
    getAllCategories(){
      this.api.selectAll('categories').then((res:ApiResponse)=>{
        this.allCategories = res.data;
    })}
    getAllProducts(){
        this.api.selectAll('product').then((res:ApiResponse)=>{
          this.AllProducts = res.data;
    })}
  
  save(){
     
      if(this.newTraffic.termek == "" || this.newTraffic.kategoriaId ==0 || this.newTraffic.vevo == "" ||this.newTraffic.egyseg == "" || this.newTraffic.nettoar == 0 || this.newTraffic.mennyiseg == 0 ){
        alert("Minden mező kitöltése kötelező!");
        return;
      }
      if(!this.id){
        this.api.insert('trafics', this.newTraffic).then((res:ApiResponse)=>{
          alert(res.message);
          this.newTraffic  = {
            id:0,
            termek:"",
            vevo:"",
            kategoriaId:0,
            categoryName :"",
            egyseg:"",
            nettoar:0,
            mennyiseg:0,
            kiadva:0
          }
          this.getAllTraffics();
        }
        );
      }   
      else{
        this.api.update('trafics',this.id, this.newTraffic ).then((res:ApiResponse)=>{
          if(res.status ===200){
            alert(res.message);
            this.router.navigate(['/trafics']);
          }
          else{
            alert("Hiba történt a frissítés során!");
          }
        });
      }  
  }
}
