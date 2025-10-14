import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../../interfaces/APIresponse';




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

  constructor(private api:ApiService) { }

  trafics: Trafic[] =[]


  async ngOnInit(){
    this.api.selectAll("trafics").then((res:ApiResponse) =>{
      if(res.status === 200){
        this.trafics = res.data;
      }
      else{
        console.log(res.message);
      }
  }
      
    );
  }
}