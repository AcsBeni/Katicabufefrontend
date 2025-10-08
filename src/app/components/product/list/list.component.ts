import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Trafic } from '../../../../interfaces/trafic';


@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProductListComponent implements OnInit {

  categories: Trafic[] =[]


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