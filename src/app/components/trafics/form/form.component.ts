import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Trafic } from '../../../../interfaces/trafic';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traficform',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TraficFormComponent {
  
  id:number | undefined = undefined;

  newTraffic:Trafic={
    id:0,
    termek:"",
    vevo:"",
    kategoriaId:0,
    egyseg:"",
    nettoar:0,
    mennyiseg:0,
    kiadva:0
  }
  router: any;
  constructor(
    private api:ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  allTraffics:Trafic[] = [];

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('trafics', this.id).then((res)=>{
        this.newTraffic = res.data[0];
      })
    }
    this.getAllTraffics();
  }
  getAllTraffics(){
    this.api.selectAll('trafics').then((res)=>{
      console.log(res);
    }
    )
  }

  save(){
   
     if(this.newTraffic.termek == "" || this.newTraffic.kategoriaId ==0 || this.newTraffic.vevo == "" ||this.newTraffic.egyseg == "" || this.newTraffic.nettoar == 0 || this.newTraffic.mennyiseg == 0){
      alert("Minden mező kitöltése kötelező!");
      return;
     }
     let idx = this.allTraffics.findIndex(item => item.termek.toLowerCase() == this.newTraffic.termek.toLowerCase() && item.id != this.newTraffic.id);
     if(idx != -1){
      alert("Ilyen nevű termék már létezik!");
      return;
     }
      if(!this.id){
        this.api.insert('trafics', this.newTraffic).then((res)=>{
          alert(res.message);
          this.newTraffic = {
            id:0,
            termek:"",
            vevo:"",
            kategoriaId:0,
            egyseg:"",
            nettoar:0,
            mennyiseg:0,
            kiadva:0
          }
          this.getAllTraffics();
        }
        );
      }     
  }
}
