import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styleUrls: ['./speaker-home.component.css']
})
export class SpeakerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('common');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('common');
  }

}
