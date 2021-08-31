// Módulos de uso
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';

// Services
import { RequestService } from './service/request.service';

// Componentes Core
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
