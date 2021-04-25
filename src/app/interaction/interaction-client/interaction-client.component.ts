import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';

@Component({
  selector: 'app-interaction-client',
  templateUrl: './interaction-client.component.html',
  styleUrls: ['./interaction-client.component.css']
})
export class InteractionClientComponent implements OnInit {
  interactions: Interaction[] | undefined;
  clientId: number = 0;
  constructor(private interactionService: InteractionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.clientId = this.route.snapshot.params['id'];
        this.getInteractions();
      }
    )
  }

  private getInteractions() {
    this.interactionService.getByClient(this.clientId).subscribe(
      i => {
        this.interactions = i;
      }
    );
  }

}
