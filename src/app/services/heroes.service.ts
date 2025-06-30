import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly baseUrl = `http://localhost:3000`;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  ListHeroes(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/heroes`, this.httpOptions);
  }
}
