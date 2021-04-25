import { Component, OnInit } from '@angular/core';
import { ClientService } from '../core/services/client.service';
import { EmployeeService } from '../core/services/employee.service';
import { Client } from '../shared/models/client';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clients:Client[] | undefined;
employees:Employee[] | undefined;
  constructor(private clientService:ClientService, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      c=>{
        this.clients=c;
      }
    );
    this.employeeService.getAllEmployees().subscribe(
      e=>{
        this.employees=e;
      }
    );
  }

}
