/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component,Inject, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogcontentexampledialogComponent } from '../dialogcontentexampledialogComponent/dialogcontentexampledialog.component';
import { FormBuilder,Validators } from '@angular/forms';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-firstpage',
    templateUrl: './firstpage.template.html'
})

export class firstpageComponent extends NBaseComponent implements OnInit {
    insidefirst:boolean=true;
 constructor(public dialog: MatDialog) {
        super();
    }

    ngOnInit() {

    }
    onclick(){
     
        this.dialog.open(dialogcontentexampledialogComponent);
      
          
    }
}