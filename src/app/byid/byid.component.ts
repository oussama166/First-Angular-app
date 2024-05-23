import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-byid',
  templateUrl: './byid.component.html',
  styleUrl: './byid.component.css'
})
export class ByidComponent {
  public clients: any;
  public keyword: number=0;
  constructor( private clientService:  ClientService) {
  }
  search(id:number) {
   this.clientService.getClientsbyid(id).subscribe(
        {
          next: data =>{
            this.clients = data;
          },
          error:err => {
            console.log(err);
          }
        })
  }
}
