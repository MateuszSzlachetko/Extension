import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
})
export class InputAreaComponent implements OnInit {
  captcha: string;
  textareaValue: string;
  hideCaptcha: boolean = false;
  allowSending: boolean = false;
  type: string;
  bugCheck: boolean = true;
  featureCheck: boolean = false;

  constructor() {
    this.captcha = '';
    this.textareaValue = '';
    this.type = 'bug';
    this.toggleChecked(this.type);
  }

  ngOnInit(): void {}

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
    setTimeout(() => {
      this.hideCaptcha = true;
      if (this.captcha !== null) this.allowSending = true;
    }, 1500);
  }

  onTextareaValueChange(event: Event): void {
    const value = (event.target as any).value;
    this.textareaValue = value;
  }

  toggleChecked(type: string) {
    if (type === 'bug') {
      this.bugCheck = true;
      this.featureCheck = false;
    }
    if (type === 'feature') {
      this.featureCheck = true;
      this.bugCheck = false;
    }
  }

  onChange(event: Event): void {
    this.type = (event.target as any).value;
    this.toggleChecked(this.type);
  }

  onClickSend() {
    if (this.textareaValue !== '' && this.allowSending) {
      console.log({ message: this.textareaValue, type: this.type });
      this.textareaValue = '';
      this.allowSending = false;
    } else if (!this.allowSending) {
      alert('Please solve the captcha or refresh the page');
    } else if (this.textareaValue === '') {
      alert('You did not input any text feedback yet');
    }
  }
}
