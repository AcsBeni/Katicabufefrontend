import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';

interface Category{
    id:number
    kategoriaNev:string
}

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})



export class CategoryListComponent implements OnInit {

  categories: Category[] =[]


  async ngOnInit(){
    try{
      const response = await axios.get('http://localhost:3000/categories')
      this.categories = response.data
      console.log(this.categories)
    }
    catch(err){
      console.log(err)
      alert("Hiba")
    }
  }
}