/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class clientservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_clientservice

  async addincicent(userdetail: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          userdetail: userdetail,
        },
        local: {
          result: 'result',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_acQmaKBtNt5EPeGb(bh);
      //appendnew_next_addincicent
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_59JkDOGI6dUoW2GT');
    }
  }

  async getIncList(getalldata: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          getalldata: getalldata,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_3aY7BuVa20kwJtXd(bh);
      //appendnew_next_getIncList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_esLYH3gV52d67Ht1');
    }
  }

  //appendnew_flow_clientservice_start

  async sd_acQmaKBtNt5EPeGb(bh) {
    try {
      bh.local.result = bh.input.userdetail;

      this.sd_7lbRluRM83FQxHCG(bh);
      //appendnew_next_sd_acQmaKBtNt5EPeGb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_acQmaKBtNt5EPeGb');
    }
  }

  async sd_7lbRluRM83FQxHCG(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_sd_7lbRluRM83FQxHCG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7lbRluRM83FQxHCG');
    }
  }

  async sd_3aY7BuVa20kwJtXd(bh) {
    try {
      bh.local.result = bh.input.getalldata;
      this.sd_2tk9n4CWAdFEf1wX(bh);
      //appendnew_next_sd_3aY7BuVa20kwJtXd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3aY7BuVa20kwJtXd');
    }
  }

  async sd_2tk9n4CWAdFEf1wX(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_sd_2tk9n4CWAdFEf1wX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2tk9n4CWAdFEf1wX');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_clientservice_Catch
}
