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
      link: 'https://i.imgur.com/7CcgDCa.png'
    },
    {
      caption: 'I am smart',
      link: 'https://i.imgur.com/Nrebfux.png'
    },
    {
      caption: 'I am camel hippie cousin',
      link: 'https://i.imgur.com/iyh3hKu.png'
    },
    {
      caption: 'I am diabetic',
      link: 'https://i.imgur.com/x6EmqKe.png'
    },
    {
      caption: 'I am cute',
      link: 'https://i.imgur.com/21hu3YL.png'
    },
    {
      caption: 'I am cool',
      link: 'https://i.imgur.com/h3NDZ9B.png'
    },
    {
      caption: 'I can travel for long distance',
      link: 'https://i.imgur.com/LVILcTw.png'
    },
    {
      caption: 'I am Llama',
      link: 'https://i.imgur.com/hMfRAMH.png'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
