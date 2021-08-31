import { Component, Input, OnInit } from '@angular/core';
import { Iheader } from 'src/app/models/Iglobal';

@Component({
  selector: 'siempreAlerta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() public header?: Iheader[];
  constructor() { }

  ngOnInit(): void {
  }

}
