/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
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
    selector: 'bh-dialogcontentexampledialog',
    templateUrl: './dialogcontentexampledialog.template.html'
})

export class dialogcontentexampledialogComponent extends NBaseComponent implements OnInit {
    sampleform: any;
    mindate: any;
    output:any;
    changedvalue:any;
    chan:string;
    userdata: datamodelsent;
    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<dialogcontentexampledialogComponent>
        , public client: clientservice) {
        super();
    }

    ngOnInit() {
        this.mindate = new Date();
        this.sampleform = this.fb.group({
            subject: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \'\-]+$')]],
            priority: ['', [Validators.required, Validators.pattern('^[0-9 \'\-]+$')]],
            date: ['', [Validators.required]]
            //profile: ['', [Validators.required, Validators.minLength(10)]]
        });
    }
    onclick() {

        this.validateallfields();
        if (this.sampleform.valid) {
            this.dialogRef.close();
        }
        else { }

        console.log('logging', this.sampleform.value);
    }
    validateallfields() {
        Object.keys(this.sampleform.controls).forEach(field => {
            const control = this.sampleform.get(field);
            control.markAsTouched({ onlySelf: true });
        });
        this.chan=this.sampleform.controls.date.value.toISOString().slice(0,10);
        this.userdata={subject:this.sampleform.controls.subject.value,
        description:this.sampleform.controls.description.value,
        priority:this.sampleform.controls.priority.value,
        date:this.chan}
        // this.userdata.date=this.sampleform.controls.date.value.toString();
        
this.callservicemethod(this.sampleform.value);
console.log(this.userdata);
//        this.client.addincicent(this.userdata);
    }
    async callservicemethod(value:any){

this.changedvalue=(await this.client.addincicent(this.userdata)).local.result;
console.log(this.changedvalue);
    }
    change(event) {
        console.log('in change', event.value);
    }
}







