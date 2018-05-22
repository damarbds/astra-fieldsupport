import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-feedback',
  templateUrl: './master-feedback.component.html',
  styleUrls: ['./master-feedback.component.scss']
})
export class MasterFeedbackComponent implements OnInit {

  constructor(private router: Router) { }
  aplication :any[]= [
    {
      "id": 1,
      "name": 'ApliTest1'
    },
    {
      "id": 2,
      "name": 'ApliTest2'
    },
    {
      "id": 3,
      "name": 'ApliTest3'
    }
  ]

  data: any[] = [
    {
      "aplication" : 'ApliTest1',
      "name" : 'TestName1',
      "description" : 'Test Description'
    },
    {
      "aplication" : 'ApliTest2',
      "name" : 'TestName2',
      "description" : 'Test Description'
    },
    {
      "aplication" : 'ApliTest3',
      "name" : 'TestName3',
      "description" : 'Test Description'
    },
  ]

  ngOnInit() {
  }

  create(){
    this.router.navigate(['data-master/create'])
  }

  delete(){
    var confirm = window.confirm("Delete this data??")
    if (confirm == true) {
      window.alert("Delete data Success!!")
    }
  }

}
