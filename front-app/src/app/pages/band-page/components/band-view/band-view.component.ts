import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Ibanda } from '../models/ibanda';

@Component({
  selector: 'siempreAlerta-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {

  public bandaInfo?: Ibanda;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getBand();
  }


  public getBand(){
    this.requestService.getRequest('banda').subscribe((data: any)=>{
      this.bandaInfo = data;
      
    })
  }
}
