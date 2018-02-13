import {Component} from '@angular/core';
import {KataService} from './kata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [KataService]
})
export class AppComponent {

  constructor() {}
}
