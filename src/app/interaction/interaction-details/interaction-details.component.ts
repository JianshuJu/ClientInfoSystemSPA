import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { InteractionDetail } from 'src/app/shared/models/interaction-detail';

@Component({
  selector: 'app-interaction-details',
  templateUrl: './interaction-details.component.html',
  styleUrls: ['./interaction-details.component.css']
})
export class InteractionDetailsComponent implements OnInit {
  interactionDetail: InteractionDetail | undefined;
  interactionId: number = 0;
  constructor(private interactionService: InteractionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.interactionId = this.route.snapshot.params['id'];
        this.getInteractionDetail();
      }
    )
  }

  private getInteractionDetail() {
    this.interactionService.getDetail(this.interactionId).subscribe(
      i => {
        this.interactionDetail = i;
      }
    );
  }
}
