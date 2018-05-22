import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.scss']
})
export class MasterFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['data-master'])
  }

}
