import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  items = [1,1,1,1,1,1];
  constructor() { }

  ngOnInit() {
  }

}
