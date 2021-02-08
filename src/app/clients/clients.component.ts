import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../services/clients.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  selectedValue = null;
  date = null;

  clients: any;
  clientsOrg: any;
  isPageLoading: boolean = true;

  searchValue: string = "";

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {

    // get all clients
    this.getAllClients()
  }

  // get all clients
  getAllClients(){
    this.clientsService.getAllClients().toPromise()
    .then(
      (data)=>{
        this.clients = data;
        this.clientsOrg = data;
        console.log("client data: ",this.clients)
        // idType
        // 0->NRC, 1->PASSPORT, 3->LICENSE

        // occupation
        // 0->employed, 1->unemployed, 2->student

        // gender
        // 0 -> male, 1->female, 2->other
      },
      (error)=>{
        console.warn("error: ",error)
      }
    )
    .finally(() => {
      this.isPageLoading= false;
    })
  }

  // GET CLIENT ID TYPE
  clientIdTYpe(id){
    let idName: string = null;
    switch(id){
      case 0:
        idName = "NRC";
        break;
      case 1:
        idName = "PASSPORT";
        break;
      case 2:
        idName = "LICENSE";
        break;
    }

    return idName.toLocaleUpperCase()
  }

  // GET occupation ID TYPE
  occupationIdTYpe(id){
    let idName: string = null;
    switch(id){
      case 0:
        idName = "EMPLOYED";
        break;
      case 1:
        idName = "UNEMPLOYED";
        break;
      case 2:
        idName = "STUDENT";
        break;
    }

    return idName.toLocaleLowerCase();
  }

  // gender id type
  genderIdType(id){
    let idName: string = null;
    switch(id){
      case 0:
        idName = "MALE";
        break;
      case 1:
        idName = "FEMALE";
        break;
      case 2:
        idName = "OTHER";
        break;
    }

    return idName.toLocaleLowerCase();
  }


  // get client details
  clientDetails(client: any){
    console.log("client details: ",client)
  }

  // search function
  clientSearch(searchValue: string){
    console.log("search value: ",searchValue)
    switch(searchValue){
      case '':
        this.clients = this.clientsOrg;
        break;
      default:
        this.clients = this.clients.filter((value) => {
          return searchValue == value.firstName || searchValue == value.middleName
          || searchValue == value.lastName || searchValue == value.phoneNumber || searchValue == value.email
          || searchValue == value.idNumber
        })
    }

    return this.clients;
  }



// date picker
  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

}
