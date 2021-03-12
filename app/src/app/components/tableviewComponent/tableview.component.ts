/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { clientservice } from '../../sd-services/clientservice';
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

    constructor(public client:clientservice) {
        super();
    }
     ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }
    // this.di.sampleform.value;
    displayedColumns: string[] = ['subject', 'description', 'priority', 'checkdate'];
  tableData = 
  
  
  
  new MatTableDataSource([
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "9898989898",
            "checkdate":"9/3/2021"
        },
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "22",
            "checkdate":"9/3/2021"
        },
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "9898989898",
            "checkdate":"9/3/2021"
        },
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "9898989898",
            "checkdate":"9/3/2021"
        },
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "9898989898",
            "checkdate":"9/3/2021"
        },
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "priority": "9898989898",
            "checkdate":"9/3/2021"
        }
    ]);
    ngOnInit() {
        
this.client.getIncList(this.tableData);

    }
    paginatioin(){
        this.tableData.paginator = this.paginator;
    }
}
