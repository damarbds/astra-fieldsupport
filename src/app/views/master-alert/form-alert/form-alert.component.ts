import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-form-alert',
  templateUrl: './form-alert.component.html',
  styleUrls: ['./form-alert.component.scss']
})
export class FormAlertComponent implements OnInit {

  titleModal: string;
  modalRef: BsModalRef;

  lookUpChoice: number = 0;
  option: any = {
    byName: 0,
    byEmail: 1,
    byUserId: 2,
  }

  isAll: boolean = false;
  allChecked: boolean = false;
  allIndeterminate: boolean = false;
  selectedIds: Array<number> = [];
  unselectedIds: Array<number> = [];

  constructor(private modalService: BsModalService) { }
  allUser = [];
  user = [];
  
  ngOnInit() {
    this.titleModal = "Add New User";
  }

  openModal(template: TemplateRef<any>) {
    this.allUser = [
      {
        "id": 1,
        "name": "Jhon Doe",
        "user_id" : "jhoendoe001",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 2,
        "name": "Jhon Doe 2",
        "user_id" : "jhoendoe002",
        "email" : "jhon.doe2@gmail.com"
      }
    ]
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  showSearch(lookUpChoice, search){
    console.log(lookUpChoice);
    console.log(search);
    this.allUser = [
      {
        "id": 1,
        "name": "Faridho",
        "user_id" : "jhoendoe001",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 2,
        "name": "Faridho",
        "user_id" : "jhoendoe002",
        "email" : "jhon.doe2@gmail.com"
      }
    ]
    console.log(this.allUser);
  }

  toChecked() {
    this.allChecked = true;
    this.allIndeterminate = false;
  }

  toIndeterminate() {
    this.allChecked = false;
    this.allIndeterminate = true;
  }

  toUnchecked() {
    this.allChecked = false;
    this.allIndeterminate = false;
  }

  selectAllAction(e) {
    this.isAll = e.target.checked;
    if (e.target.checked)
      this.toChecked();
    else
      this.toUnchecked();
      this.allUser.forEach(item => {
      item.action = this.isAll;
    });
    this.selectedIds = [];
    this.unselectedIds = [];
  }

  passUser(){
    this.user = [
      {
        "id": 1,
        "name": "Faridho",
        "user_id" : "jhoendoe001",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 2,
        "name": "Faridho",
        "user_id" : "jhoendoe002",
        "email" : "jhon.doe2@gmail.com"
      }
    ]
  }

  delete(){
    var confirm = window.confirm("Delete this data??")
    if (confirm == true) {
      window.alert("Delete data Success!!")
    }
  }

}
