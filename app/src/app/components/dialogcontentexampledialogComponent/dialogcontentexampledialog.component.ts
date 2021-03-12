/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    selector: 'bh-dialogcontentexampledialog',
    templateUrl: './dialogcontentexampledialog.template.html'
})

export class dialogcontentexampledialogComponent extends NBaseComponent implements OnInit {
    sampleform: any;
    mindate: any;
    output:any;
    changedvalue:any;
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
            checkdate: ['', [Validators.required]]
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
this.callservicemethod(this.sampleform.value);

        this.client.addincicent(this.sampleform.value);
    }
    async callservicemethod(value:any){

this.changedvalue=(await this.client.addincicent(this.sampleform.value)).local.result;
console.log(this.changedvalue);
    }
    change(event) {
        console.log('in change', event.value);
    }
}







