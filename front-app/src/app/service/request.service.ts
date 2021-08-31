// Decorador
import { Injectable } from '@angular/core';

// Módulos de uso en el servicio
import { HttpClient } from '@angular/common/http';

// BaseUrl to use
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

constructor(private httpClient : HttpClient) {/* Empty */ }

  public getRequest(url: string){
    return this.httpClient.get(`${environment.baseUrl}${url}`)
    }
}
