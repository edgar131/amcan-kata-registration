import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {OnInit} from '@angular/core';
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  tori = {};
  uki = {};
  ukiDobBs: NgbDateStruct;
  toriDobBs: NgbDateStruct;
  competitionDate;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  selectedCategories: Array<number> = [];
  categories: Array<any> = [];

  constructor(private http: HttpClient) {
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
    //alert('test');
  }

  ngOnInit() {
    const now: Date = new Date();
    this.http.get<any>('/assets/mock_config.json').subscribe(config => {
      this.competitionDate = config.competition_date;
    });
    this.http.get<any[]>('/assets/mock_categories.json').subscribe(categories => {
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
