import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, AfterViewInit {

  @ViewChild("canvas") canvas: ElementRef<HTMLInputElement> | any;
  @Input() questions: any

  fields: any[] = [];
  dynamicForm: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.canvas) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    }
  }


  getFields(index: number) {
    this.fields = [];
    this.fields = this.questions.sections[index].fields.sort((a: any, b: any) => a.weight - b.weight);
    if (this.fields?.length) {
      const controls: any = {};
      this.fields.forEach((res) => {
        const validationArray: any[] = [];
        if (res.required) {
          validationArray.push(Validators.required);
        }
        if (res.answer_type === "email") {
          validationArray.push(Validators.pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$'))
        }
        if (res.answer_type === 'phone') {
          validationArray.push(
            Validators.pattern(/^\(?[(](\d{3})\)?[133)](\d{3})[- ](\d{4})$/))
        }
        controls[res.name] = new FormControl('', validationArray);
      });
      this.dynamicForm = new FormGroup(controls);

    }
  }

  onSubmit() {

  }

}
