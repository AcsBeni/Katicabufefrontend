import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Buyer } from '../../../../interfaces/buyer';
import { ApiResponse } from '../../../../interfaces/APIresponse';

@Component({
  selector: 'app-buyerslist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class BuyersListComponent {
  constructor(private api:ApiService) { }
  buyers: Buyer[] = [];
  async ngOnInit(){
      this.getAllBuyers();
    }

  getAllBuyers(){
   this.api.selectAll("buyers").then((res:ApiResponse) =>{
        if(res.status === 200){
          this.buyers = res.data;
        }
        else{
          console.log(res.message);
        }});
  }
}
