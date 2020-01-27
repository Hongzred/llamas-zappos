import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items = [
    {
      caption: 'I am social',
      link: './assets/images/7CcgDCa.png'
    },
    {
      caption: 'I am smart',
      link: './assets/images/Nrebfux.png'
    },
    {
      caption: 'I am camel hippie cousin',
      link: './assets/images/iyh3hKu.png'
    },
    {
      caption: 'I am diabetic',
      link: './assets/images/x6EmqKe.png'
    },
    {
      caption: 'I am cute',
      link: './assets/images/21hu3YL.png'
    },
    {
      caption: 'I am cool',
      link: './assets/images/h3NDZ9B.png'
    },
    {
      caption: 'I can travel for long distance',
      link: './assets/images/LVILcTw.png'
    },
    {
      caption: 'I am Llama',
      link: './assets/images/hMfRAMH.png'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
