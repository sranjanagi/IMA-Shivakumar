/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { clientservice } from '../../sd-services/clientservice';
import { datamodelsent } from 'app/models';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-dialogforupdate',
    templateUrl: './dialogforupdate.template.html'
})

export class dialogforupdateComponent extends NBaseComponent implements OnInit {
  sampleform2: any;
    mindate: any;
    output:any;
    changedvalue:any;
    chan:string;
    userdata: datamodelsent;
    
    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<dialogforupdateComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
         public client: clientservice) {
        super();
         console.log('data', this.data);
    }

    ngOnInit() {
        
 this.sampleform2 = this.fb.group({
            subject2: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            description2: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \'\-]+$')]],
            priority2: ['', [Validators.required, Validators.pattern('^[0-9 \'\-]+$')]],
            date2: ['', [Validators.required]]

            //profile: ['', [Validators.required, Validators.minLength(10)]]
        });
        console.log("in fb",this.data.id.subject);
        this.sampleform2.value=this.data.id;
        this.sampleform2.controls.description2.value=this.data.id.description;
        this.sampleform2.controls.priority2.value=this.data.id.priority;
        this.sampleform2.controls.date2.value=this.data.id.date;
         this.sampleform2.controls.subject2.value=this.data.id.subject;
         console.log( this.sampleform2.controls.subject2.value);
        //this.chan=this.data.id.date.toISOString().slice(0,10);
    }
    onclick(){
        
        console.log("in click",this.sampleform2.value);
  this.userdata={
   
      subject:this.sampleform2.controls.subject2.value,
        description:this.sampleform2.controls.description2.value,
        priority:this.sampleform2.controls.priority2.value,
        date:this.chan}
        console.log("call function");
        console.log("in fun",this.userdata);
this.callservicemethod();
    }
      async callservicemethod(){

this.changedvalue=(await this.client.editnode(this.userdata,this.data.id._id)).local.result;
console.log(this.changedvalue);
 this.dialogRef.close();
 
    }
    ondatechangecall(){
this.chan=this.sampleform2.controls.date2.value.toISOString().slice(0,10);
    }
}
