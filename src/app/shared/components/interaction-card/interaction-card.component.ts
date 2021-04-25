import { Component, Input, OnInit } from '@angular/core';
import { Interaction } from '../../models/interaction';

@Component({
  selector: 'app-interaction-card',
  templateUrl: './interaction-card.component.html',
  styleUrls: ['./interaction-card.component.css']
})
export class InteractionCardComponent implements OnInit {
@Input() interaction:Interaction | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
