import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'Ononto Jolil',
    about: '“Lorem ipsum dolor sit amet, consectetur adipising elieat, sed do eiusmod tempor incididunt utmabor edolore exercitation ullamco laboris nisi ut aliquip” ex ea ',
    img: 'icons/headsvg.svg',
    top: 'Joker in Dhallywood',
    bottom: 'All we have to decide is what to do with the time that is given to us'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
