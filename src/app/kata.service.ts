import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KataService {

  registration: any;

  constructor(private http: HttpClient) {
  }

  getRegistration() {
    return this.registration;
  }

  getConfig() {
    return this.http.get<any>(environment.configHost);
  }

  getKataCategories() {
    return this.http.get<any[]>(environment.categoryHost);
  }

  postRegistration(tori, uki, categories) {
    const payload = {
      tori: tori,
      uki: uki,
      categories: categories
    };
    return this.http.post(environment.registerHost, payload).toPromise().then(resp => {
      this.registration = resp;
    });
  }
}
