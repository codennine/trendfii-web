import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  stock: string = '';

  constructor(
    private route: ActivatedRoute
  ) { 
    this.stock = this.route.snapshot.params['stock'];
    console.log(this.route.snapshot.params.stock);
  }

  ngOnInit() {
    console.log('iniciado');
  }

}
