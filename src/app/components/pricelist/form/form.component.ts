import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiResponse } from '../../../../interfaces/APIresponse';

interface Price{
  id:number
  nettoar:number
}


@Component({
  selector: 'app-pricelistform',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class PriceFormComponent {
  
}
