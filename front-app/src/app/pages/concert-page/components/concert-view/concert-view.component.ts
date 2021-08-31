import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Iconciertos } from '../models/iconciertos';

@Component({
  selector: 'siempreAlerta-concert-view',
  templateUrl: './concert-view.component.html',
  styleUrls: ['./concert-view.component.scss']
})
export class ConcertViewComponent implements OnInit {

  public concertInfo?: Iconciertos[];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getConcerts();
  }

  public getConcerts(){
    this.requestService.getRequest('conciertos').subscribe((data: any) => {
      this.concertInfo = data;
    })
  }

}
