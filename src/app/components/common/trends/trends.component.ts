import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  stocks: any[] = [];

  constructor(
    private stockService: StocksService
  ) { }

  ngOnInit() {
    this.stockService.listStocks()
      .subscribe(response => {
        if(response.status == 200) {
          this.stocks = response.json().result;
        }
      });
  }

}
