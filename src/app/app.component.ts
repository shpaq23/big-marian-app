import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<big-marian-game></big-marian-game>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'big-marian-app';

  constructor() {
  }

  ngOnInit() {

  }
}
