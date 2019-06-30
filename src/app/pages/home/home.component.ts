import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stocks: any[] = [];
  selectedStock: string = '';

  constructor(
    private stockService: StocksService,
    private route: ActivatedRoute
  ) { 
    let stock = this.route.snapshot.params.stock;
    this.selectedStock = stock;
  }

  ngOnInit() {
    
  }

}
