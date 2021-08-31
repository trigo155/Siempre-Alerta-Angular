import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Infostatus } from 'src/app/shared/components/info-status/models/iinfostatus';
import { Idiscografia } from '../models/idiscografia';

@Component({
  selector: 'siempreAlerta-discog-view',
  templateUrl: './discog-view.component.html',
  styleUrls: ['./discog-view.component.scss']
})
export class DiscogViewComponent implements OnInit {

  public discogInfo!: Idiscografia;
  public infoStatusConf?: Infostatus;

  constructor(private requestService: RequestService) {
    this.infoStatusConf = this.configStatus();
   }

  ngOnInit(): void {
    this.getDiscografia();
  }

  public getDiscografia(){
    this.requestService.getRequest('discografia').subscribe((data: any) =>{
      this.discogInfo = data;
    })
  }

  public configStatus(): Infostatus{
      return {
        link: { href: "https://soundcloud.com/juan-jose-trigo-hormigos"},
        icon:{
          src:'../assets/images/playbutton.png',
          alt: 'Play button'
        }
      }
  }

}
