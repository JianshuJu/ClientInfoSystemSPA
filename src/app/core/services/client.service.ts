import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService:ApiService) { }

  getAllClients():Observable<Client[]> {
    return this.apiService.getAll('client/allClients');
  }
}
