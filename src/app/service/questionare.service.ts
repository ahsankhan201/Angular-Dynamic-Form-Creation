import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionareService {

  constructor(private _http: HttpClient) {
  }

  apiUrl() {
    return `https://tryrealtyschool.com/api.json`;
  }

  getQuestionare() {
    return this._http.get('../../assets/question.json');
    // return this._http.get(this.apiUrl());
  }
}
