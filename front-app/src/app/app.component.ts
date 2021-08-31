// Decorators
import { Component } from '@angular/core';
// Services 
import { RequestService } from './service/request.service';
// Models
import { Ifooter, Iheader } from './models/Iglobal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public header?: Iheader[];
  public footer?: Ifooter;

  constructor(private requestService: RequestService){

    // Recuperamos la información del header y del footer
    this.getCoreHeader();
    this.getCoreFooter();
  }

  // Esta función recupera los elementos de service
  public getCoreHeader(){
    this.requestService.getRequest('header').subscribe((data: any)=>{
      this.header = data;
      //console.log(this.header);
      
    })
  }
  
  // Esta función recupera los elementos de service
  public getCoreFooter(){
    this.requestService.getRequest('footer').subscribe((data: any)=>{
      this.footer = data;
      //console.log(this.footer);
    })
  }
}
