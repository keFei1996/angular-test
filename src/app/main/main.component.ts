import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  initialCount: number = 5;

  changeMsg: string;

  countChange(event: number) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
