import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterFeedbackService } from '../../../services';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  constructor(private router: Router, private feedbackService: MasterFeedbackService,
  private actRoute : ActivatedRoute
  ) { }
  feedbackList : any = []
  selectedFeedback : any = []
  data: any = {
    applicationName : "",
    id: 0,
    applicationId: 0,
    description : "",
    feedbackName : ""
  }

  ngOnInit() {
    this.feedbackService.getFeedbackList().subscribe(item => {
      var temp = <any>item
      var id : number
      this.actRoute.params.subscribe(par => {
        console.log(par)
        id = par.id
      })
      this.selectedFeedback = temp.items.find( x => x.id == id)
      this.data.applicationName = this.selectedFeedback.applicationName
      this.data.id = this.selectedFeedback.id
      this.data.applicationId = this.selectedFeedback.applicationId
      this.data.description = this.selectedFeedback.description
      this.data.feedbackName = this.selectedFeedback.feedbackName
    })
  }

  onCancel(){
    this.router.navigate(['data-master'])
  }

}
