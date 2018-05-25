import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterFeedbackService } from '../../services/master-service/master-feedback.service';

@Component({
  selector: 'app-master-feedback',
  templateUrl: './master-feedback.component.html',
  styleUrls: ['./master-feedback.component.scss']
})
export class MasterFeedbackComponent implements OnInit {

  constructor(private router: Router, private feedbackService : MasterFeedbackService) { }
  aplication :any = []

  data: any = []

  ngOnInit() {
    this.feedbackService.getApp().subscribe(data => {
      var temp = <any>data
      this.aplication = temp.items
      this.feedbackService.getFeedbackList().subscribe(data2 => {
        var temp2 = <any>data2
        this.data = temp2.items
        console.log(this.data)
      })
    })
  }

  create(){
    this.router.navigate(['data-master/create'])
  }

  edit(id){
    this.router.navigate(['data-master/edit/'+id])
  }

  detail(id){
    this.router.navigate(['data-master/detail/'+id])
  }

  delete(){
    var confirm = window.confirm("Delete this data??")
    if (confirm == true) {
      window.alert("Delete data Success!!")
    }
  }

}
