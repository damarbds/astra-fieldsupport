import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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

  //check all
  isAll: boolean = false;
  allChecked: boolean = false;
  allIndeterminate: boolean = false;
  selectedIds: Array<number> = [];
  unselectedIds: Array<number> = [];

  constructor(private modalService: BsModalService) { 
    
   }

  allUser: any = [];
  getUser: any = [];
  returnDataAllUser: any = [];
  returnDataGetUser: any = [];
  search:string = '';
  count: number;

  //pagination
  itemsPerPage: number = 3;
  maxSize: number = 6;

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
      },
      {
        "id": 1,
        "name": "Jhon Doe 3",
        "user_id" : "jhoendoe003",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 2,
        "name": "Jhon Doe 4",
        "user_id" : "jhoendoe004",
        "email" : "jhon.doe2@gmail.com"
      },
      {
        "id": 1,
        "name": "Jhon Doe 5",
        "user_id" : "jhoendoe003",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 2,
        "name": "Jhon Doe 6",
        "user_id" : "jhoendoe004",
        "email" : "jhon.doe2@gmail.com"
      }
    ]
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.count = 6;
    this.returnDataAllUser = this.allUser.slice(0, 3);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnDataAllUser = this.allUser.slice(startItem, endItem);
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
      },
      {
        "id": 3,
        "name": "Faridho",
        "user_id" : "jhoendoe001",
        "email" : "jhon.doe@gmail.com"
      },
      {
        "id": 4,
        "name": "Faridho",
        "user_id" : "jhoendoe002",
        "email" : "jhon.doe2@gmail.com"
      }
    ]
    this.count = 6;
    this.returnDataAllUser = this.allUser.slice(0, 3);
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
    this.getUser = [
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
    this.count = 6;
    this.returnDataGetUser = this.getUser.slice(0, 3);
  }

  pageChangedGetUser(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnDataGetUser = this.getUser.slice(startItem, endItem);
  }

  delete(){
    var confirm = window.confirm("Delete this data??")
    if (confirm == true) {
      window.alert("Delete data Success!!")
    }
  }

  clearSearch() {
    this.search = ' ';
  }

  submitAlertGroup(){
    window.alert("Submit data Success!!")
  }

  cancelAlertGroup(){
    window.history.back();
  }

  checkboxChange(item){
    if(item.action === true){
      console.log(item);
    }
  }

}
