import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content = [
    {
      title: 'I am Llamas...',
      description:
        'Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall. Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight, so a 400-pound male llama can carry about 100 to 120 pounds on a trek of 10 to 12 miles with no problem.'
    },
    {
      title: 'A little about me...',
      description:
        'A llama\'s stomach has three compartments. They are called the rumen, omasum, and abomasum. A cow\'s stomach has four compartments. Like cows, llamas must regurgitate and re-chew their food to digest it completely.'
    },
    {
      title: 'more about me...',
      description:
        'Llama poop has almost no odor. Llama farmers refer to llama manure as llama beans. It makes for a great, eco-friendly fertilizer. Historically, the Incas in Peru burned dried llama poop for fuel.'
    },
    {
      title: 'I am social',
      description:
        'Llamas are social animals and prefer to live with other llamas or herd animals. The social structure of llamas changes frequently and a male llama can move up the social ladder by picking, and winning, small fights with the leader of the group.'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
