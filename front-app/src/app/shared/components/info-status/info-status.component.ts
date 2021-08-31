import { Component, Input, OnInit } from '@angular/core';
import { Infostatus } from './models/iinfostatus';

@Component({
  selector: 'siempreAlerta-info-status',
  templateUrl: './info-status.component.html',
  styleUrls: ['./info-status.component.scss']
})
export class InfoStatusComponent implements OnInit {

  @Input() public infostatus?: Infostatus
  constructor() { }

  ngOnInit(): void {
  }

}
