import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiResponse } from '../../interfaces/APIresponse';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  SERVER = "http://localhost:3000";
  constructor() { }

  async selectAll(table:string):Promise<ApiResponse>{
    try{
      const response = await axios.get(`${this.SERVER}/${table}`)
      return {
        status: 200,
        data: response.data
      };
     
    }
    catch(err:any){
      console.log(err)
      return{
        status: 500,
        message: "Hiba az adatbázis lekérdezése során"
      };
    }
  }

  select(){

  }

  insert(){

  }

  update(){

  }

  delete(){

  }

  deleteAll(){

  }
}
