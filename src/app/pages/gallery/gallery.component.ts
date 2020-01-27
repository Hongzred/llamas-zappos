import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items = [
    'I am social',
    'I am smart',
    'I am camel hippie cousin',
    'I am diabetic',
    'I humming',
    'I am adoptive',
    'I am cute',
    'I am cool',
    'I can travel for long distance',
    'I am Llama'
  ];
  constructor() {}

  ngOnInit() {}
}
