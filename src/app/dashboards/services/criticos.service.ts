import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CriticosService {
  private urlBase: string = environments.urlBase;

  constructor(
    private http: HttpClient
  ) { }

  getCriticos(): Observable<any> {
    return this.http.get(`${ this.urlBase }/dashboard/criticos`);
  }
}
