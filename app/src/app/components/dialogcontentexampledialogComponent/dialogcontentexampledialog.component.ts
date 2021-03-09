/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-dialogcontentexampledialog',
    templateUrl: './dialogcontentexampledialog.template.html'
})

export class dialogcontentexampledialogComponent extends NBaseComponent implements OnInit {
sampleform:any;
mindate:any;
    constructor(public fb:FormBuilder) {
        super();
    }

    ngOnInit() {
this.mindate=new Date();
   this.sampleform = this.fb.group({
      subject: ['',Validators.required,Validators.pattern('[a-zA-Z ]*')],
      description: ['',Validators.required,Validators.pattern('^[a-zA-Z0-9 \'\-]+$')],
      priority:['',Validators.pattern('^[0-9 \'\-]+$')],
      checkdate:['',Validators.required]
      //profile: ['', [Validators.required, Validators.minLength(10)]]
    });
    }
     onclick(){

        console.log('logging',this.sampleform.value);
    }
    change(event){
        console.log('in change',event.value);
    }
}







