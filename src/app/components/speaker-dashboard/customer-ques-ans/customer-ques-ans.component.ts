import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-customer-ques-ans',
  templateUrl: './customer-ques-ans.component.html',
  styleUrls: ['./customer-ques-ans.component.css']
})
export class CustomerQuesAnsComponent implements OnInit {

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
