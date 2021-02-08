import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  // get all clients
  public getAllClients(){
    return this.http.get(`${environment.BASE_API_URL}/clients`, {headers: environment.API_HEADERS})
  }
}
