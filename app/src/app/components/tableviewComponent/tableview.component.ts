/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { clientservice } from '../../sd-services/clientservice';
import { dialogforupdateComponent } from '../dialogforupdateComponent/dialogforupdate.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-tableview',
    templateUrl: './tableview.template.html'
})

export class tableviewComponent extends NBaseComponent implements OnInit, AfterViewInit {
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
dataserver:any;
tableData:any;
changedvalue:any;
    constructor(public client:clientservice,public dialog: MatDialog) {
        super();
    }
     ngAfterViewInit() {
   // this.tableData.sort = this.sort;
  }
    // this.di.sampleform.value;
    displayedColumns: string[] = ['subject', 'description', 'priority', 'checkdate'];
//   tableData = 
  
  
  
//   new MatTableDataSource([
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "9898989898",
//             "checkdate":"9/3/2021"
//         },
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "22",
//             "checkdate":"9/3/2021"
//         },
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "9898989898",
//             "checkdate":"9/3/2021"
//         },
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "9898989898",
//             "checkdate":"9/3/2021"
//         },
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "9898989898",
//             "checkdate":"9/3/2021"
//         },
//         {
//             "subject": "Angshuman",
//             "description": "angshu@gmail.com",
//             "priority": "9898989898",
//             "checkdate":"9/3/2021"
//         }
//     ]);
    ngOnInit() {
        
this.callservermethod();


    }

     async callservermethod(){

this.changedvalue=(await this.client.getIncList()).local.result;
console.log("inside calling function ",this.changedvalue);

this.tableData = 
  
  
  
  new MatTableDataSource(this.changedvalue);
  this.tableData.paginator = this.paginator;
}
 async calldeletemethod(value:any){

this.changedvalue=(await this.client.deletenode(value)).local.result;
console.log(this.changedvalue);
    }
    paginatioin(){
        this.tableData.paginator = this.paginator;
         this.tableData.sort = this.sort;
    }
    calldelete(value:string){
        console.log("on delete ",value);
this.calldeletemethod(value);
window.location.reload(true);
    }
    callupdate(value:any){
        console.log("in callupdate",value);
this.dialog.open(dialogforupdateComponent, {
  data: {
    id: value
  }}).afterClosed().subscribe(() => this.callservermethod());
 // this.dialog.open(CustomerComponent, dialogConfig).afterClosed().subscribe(() => this.fetchUsers());
    }
}
