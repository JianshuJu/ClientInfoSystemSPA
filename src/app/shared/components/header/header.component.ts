import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeUser } from '../../models/employeeUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean | undefined;
  currentUser: EmployeeUser | undefined;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(
      auth => {
        this.isAuthenticated = auth;
        console.log("Auth Status: " + this.isAuthenticated);
        this.authService.currentUser.subscribe(resp=>this.currentUser=resp);
        console.log(this.currentUser);
      }
    )
  }

}
