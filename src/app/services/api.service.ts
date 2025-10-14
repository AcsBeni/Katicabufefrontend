import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiResponse } from '../../interfaces/APIresponse';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  SERVER = "http://localhost:3000";
  constructor() { }

  //GET all records from table -> GET http://localhost:3000/users
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
  //GET one record from table by id -> GET http://localhost:3000/users/5
  async select(table:string, id:number):Promise<ApiResponse>{
    try{
      const response = await axios.get(`${this.SERVER}/${table}/${id}`)
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
  //INSERT one record into table -> POST http://localhost:3000/users
  async insert(table:string, data:any){
    try{
      const response = await axios.post(`${this.SERVER}/${table}`, data)
      return {
        status: 200,
        message: "Sikeres adatfelvétel a táblába", 
        data: response.data
      };
     
    }
    catch(err:any){
      console.log(err)
      return{
        status: 500,
        message: "Hiba a művelet során"
      };
    }
  }
//UPDATE one record in table by id -> PATCH http://localhost:3000/users/5 
  async update(table:string, id:number, data:any){
    try{
      const response = await axios.patch(`${this.SERVER}/${table}/${id}`, data)
      return {
        status: 200,
        message: "Sikeres adatfelvétel a táblába", 
        data: response.data
      };
     
    }
    catch(err:any){
      console.log(err)
      return{
        status: 500,
        message: "Hiba a művelet során"
      };
    }
  }
  //DELETE one record from table by id ->DELETE http://localhost:3000/users/5
  async delete(table:string, id:number):Promise<ApiResponse>{
    try{
      const response = await axios.delete(`${this.SERVER}/${table}/${id}`)
      return {
        status: 200,
        message: "Sikeres törlés a táblából 😊"
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

  //Delete all records from table -> DELETE http://localhost:3000/users
  async deleteAll(table:string){
    try{
      const response = await axios.delete(`${this.SERVER}/${table}`)
      return {
        status: 200,
        message: "Sikeres törlés minden rekord törölve 😒"
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
}
