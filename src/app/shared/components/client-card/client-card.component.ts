import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
@Input() client:Client | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
