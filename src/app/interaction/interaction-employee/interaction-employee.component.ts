import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';

@Component({
  selector: 'app-interaction-employee',
  templateUrl: './interaction-employee.component.html',
  styleUrls: ['./interaction-employee.component.css']
})
export class InteractionEmployeeComponent implements OnInit {

  interactions: Interaction[] | undefined;
  employeeId: number = 0;
  constructor(private interactionService: InteractionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.employeeId = this.route.snapshot.params['id'];
        this.getInteractions();
      }
    );
  }

  private getInteractions() {
    this.interactionService.getByEmployee(this.employeeId).subscribe(
      i => {
        this.interactions = i;
      }
    );
  }

}
