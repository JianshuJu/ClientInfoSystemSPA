import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interaction } from 'src/app/shared/models/interaction';
import { InteractionDetail } from 'src/app/shared/models/interaction-detail';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private apiService:ApiService) { }
  getByClient(clientId:number):Observable<Interaction[]>{
    return this.apiService.getById('Interaction/client', clientId);
  }
  getByEmployee(employeeId:number):Observable<Interaction[]>{
    return this.apiService.getById('Interaction/employee', employeeId);
  }
  getDetail(interactionId:number):Observable<InteractionDetail>{
    return this.apiService.getById('Interaction/detail', interactionId);
  }
}
