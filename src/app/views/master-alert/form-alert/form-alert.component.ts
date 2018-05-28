import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alert',
  templateUrl: './form-alert.component.html',
  styleUrls: ['./form-alert.component.scss']
})
export class FormAlertComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  back(){
    this.router.navigate(['/master-alert'])
  }
}
