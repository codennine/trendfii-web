import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private readonly endpoints = {
    'list': 'http://dlombelloplanilhas.000webhostapp.com/ativos2.php?key=196132&classe=FII'
  };

  constructor(private http: Http) { }

  listStocks() {
    return this.http.get(this.endpoints.list);
  }
}
