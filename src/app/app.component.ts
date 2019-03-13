import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kosher';
  subtitle = 'an app to show kosher things.';
  content = 'some stuff that we fill in later';
  // Init method
  ngOnInit(): void {
    this.title = 'WORD!!!';
  }

}
