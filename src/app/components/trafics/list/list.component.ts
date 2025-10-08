import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';


interface Trafic{
  id:number
  termek:string
  vevo:string
  kategoriaId:number
  kategoriaNev:string
  egyseg:number
  nettoar:number
  mennyiseg:number
  kiadva:number
}
@Component({
  selector: 'app-traficlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TraficListComponent implements OnInit {

  trafics: Trafic[] =[]


  async ngOnInit(){
    try{
      const response = await axios.get('http://localhost:3000/trafics')
      this.trafics = response.data
      console.log(this.trafics)
    }
    catch(err){
      console.log(err)
      alert("Hiba")
    }
  }
}