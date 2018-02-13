import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {OnInit} from '@angular/core';
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';
import {KataService} from '../kata.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: []
})
export class RegistrationComponent implements OnInit {
  tori: any;
  uki: any;
  ukiDobBs: NgbDateStruct;
  toriDobBs: NgbDateStruct;
  competitionDate;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  selectedCategories: Array<number> = [];
  categories: Array<any> = [];

  constructor(private router: Router, private service: KataService) {
  }

  dobSelect(c, dob) {
    c.dob = new Date(dob.month + '/' + dob.day + '/' + dob.year);
  }

  ageCalc(dob) {
    if (dob !== null && dob !== undefined) {
      return moment(this.competitionDate).diff(moment(dob), 'years');
    }
  }

  categorySelected(category) {
    const idx = this.selectedCategories.findIndex(cat => cat === category.id);
    if (idx >= 0) {
      this.selectedCategories.splice(idx, 1);
    } else {
      if (this.selectedCategories.length >= 2) {
        return false;
      } else {
        this.selectedCategories.push(category.id);
      }
    }
  }

  onSubmit() {
    this.service.postRegistration(this.tori, this.uki, this.categories).then(resp => {
      this.router.navigateByUrl('/payment');
    });
  }

  ngOnInit() {
    const now: Date = new Date();
    this.tori = {};
    this.uki = {};
    this.service.getConfig().subscribe(config => {
      this.competitionDate = config.competition_date;
    });
    this.service.getKataCategories().subscribe(categories => {
      categories.forEach((item) => this.categories.push(item));
    });
    this.minDate = {
      year: 1900,
      month: 1,
      day: 1
    };
    this.maxDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate() + 1
    };
  }
}
