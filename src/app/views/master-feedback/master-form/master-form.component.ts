import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterFeedbackService } from '../../../services';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.scss']
})
export class MasterFormComponent implements OnInit {

  constructor(private router:Router, private feedbackService: MasterFeedbackService,
  private actRoute : ActivatedRoute
  ) { }

  selectedData : any = []
  data : any = []
  listApp : any = []
  selectedApp : any = []
  isEdit:boolean = false

  ngOnInit() {
    this.feedbackService.getApp().subscribe(data => {
      var temp = <any>data
      this.listApp = temp.items
    })
    this.feedbackService.getFeedbackList().subscribe(data =>{
      var temp = <any>data
      this.data = temp.items
      this.actRoute.params.subscribe(par => {
        
        this.action(par.id)
      })
      console.log(this.data)
    })
  }

  action(id){
    if(id){
      this.isEdit = true
      this.data = this.data.find(x => x.id == id)
      this.selectedApp = this.listApp.find(x => x.id == this.data.applicationId)
      console.log(this.selectedApp)
    }
    else{
      this.data
    }
  }

  onSubmit(){
    if(this.isEdit==true){
      this.feedbackService.edit(this.data.id,this.data).subscribe(item =>{
        this.router.navigate(['data-master'])
      })
    }
    else{
      this.feedbackService.create(this.data).subscribe(item =>{
        this.router.navigate(['data-master'])
      })
    }
  }

  onCancel(){
    this.router.navigate(['data-master'])
  }

}
