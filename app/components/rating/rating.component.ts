import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  users = [

    {
      emote: 'emoji_emotions',
      name: "Taras Ukhman",
      perssent: 69
    },
    {
      emote: 'sentiment_satisfied',
      name: "Custor Yana",
      perssent: 90
    },
    {
      emote: 'mood_bad',
      name: "Lena Golova",
      perssent: 30
    },
    {
      emote: 'sentiment_satisfied_alt',
      name: "Homer Simpson",
      perssent: 40
    },
    {
      emote: 'mood_bad',
      name: "Coble Sasha",
      perssent: 28
    },
    {
      emote: 'mood_bad',
      name: "Dungeon Master",
      perssent: 20
    },
    {
      emote: 'sentiment_dissatisfied',
      name: "John Psina",
      perssent: 15
    },
    {
      emote: 'sentiment_very_dissatisfied',
      name: "Da Baby",
      perssent: 10
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
