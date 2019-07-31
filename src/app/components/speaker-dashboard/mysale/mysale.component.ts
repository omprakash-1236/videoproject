import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mysale',
  templateUrl: './mysale.component.html',
  styleUrls: ['./mysale.component.css']
})
export class MysaleComponent implements OnInit {

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
