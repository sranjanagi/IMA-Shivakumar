/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material/table';

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

export class tableviewComponent extends NBaseComponent implements OnInit {

    constructor() {
        super();
    }
    // this.di.sampleform.value;
  tableData = 
  
  
  
  new MatTableDataSource([
        {
            "subject": "Angshuman",
            "description": "angshu@gmail.com",
            "Priority": "9898989898",
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
        }
    ]);
    ngOnInit() {

    }
}
