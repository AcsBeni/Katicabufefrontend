import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Stats } from '../../../interfaces/stats';
import { ApiResponse } from '../../../interfaces/APIresponse';





@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss'
})
export class StatComponent {
  constructor(private api:ApiService) { }
  statistics: Stats | null = null


  async ngOnInit(){
    this.getStatistics();
  }
  getStatistics(){
    this.api.selectAll("statistics").then((res:ApiResponse) =>{
    if(res.status === 200){
      this.statistics = res.data;
      
    }
    else{
      console.log(res.message);
    }});
  }
   
}
