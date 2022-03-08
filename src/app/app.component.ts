import { Component } from '@angular/core';
import { QuestionareService } from './service/questionare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private questionareService: QuestionareService) {
  }
  title = 'demoApp';
  questions: any;

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionareService.getQuestionare().subscribe(result => {
      this.questions = result;
    })
  }
}
