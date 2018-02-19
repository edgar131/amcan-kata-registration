import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KataService} from '../kata.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: []
})
export class PaymentComponent implements OnInit {

  selectedCategories: any[] = [];
  kata_cost;
  kata_cost_additional;
  competition_year;

  constructor(private router: Router, private service: KataService) { }

  registration: any;

  ngOnInit() {
    this.registration = this.service.getRegistration();
    if (this.registration === null || this.registration === undefined) {
      this.router.navigateByUrl('/');
    }
    this.service.getConfig().subscribe(config => {
      this.kata_cost = config.kata_cost;
      this.kata_cost_additional = config.kata_cost_additional;
      this.competition_year = config.competition_year;
    });
    this.service.getKataCategories().subscribe(categories => {
      let cats = {};
      categories.forEach((item) => {
        cats[item.id] = item;
      });
      this.registration.categories.forEach((item) => {
        this.selectedCategories.push(cats[item]);
      });
    });
  }

}
