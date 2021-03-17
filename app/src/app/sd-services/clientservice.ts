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
      bh = await this.scriptnode(bh);
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

  async getIncList(...others) {
    try {
      var bh = {
        input: {},
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

  async deletenode(id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_C0sA2H65RXCd6QgG(bh);
      //appendnew_next_deletenode
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nUeZhdh1kkS75REu');
    }
  }

  async editnode(userdetail: any = undefined, id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          userdetail: userdetail,
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_t6UZ7a1x4g6KVsUw(bh);
      //appendnew_next_editnode
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8FITAAvIrxbQMw9k');
    }
  }

  //appendnew_flow_clientservice_start

  async scriptnode(bh) {
    try {
      bh.local.result = bh.input.userdetail;
      //bh.input.body=bh.input.userdetail;
      console.log('in script client', bh.input.userdetail);
      bh = await this.sd_kiljKrUzLHqntozT(bh);
      //appendnew_next_scriptnode
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_acQmaKBtNt5EPeGb');
    }
  }

  async sd_kiljKrUzLHqntozT(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addincident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userdetail,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_7lbRluRM83FQxHCG(bh);
      //appendnew_next_sd_kiljKrUzLHqntozT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kiljKrUzLHqntozT');
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
      console.log('in getting data', bh.local.result);
      bh = await this.getrequest(bh);
      //appendnew_next_sd_3aY7BuVa20kwJtXd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3aY7BuVa20kwJtXd');
    }
  }

  async getrequest(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getincidentdata/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_2tk9n4CWAdFEf1wX(bh);
      //appendnew_next_getrequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rDGceiajbYilK3UE');
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

  async sd_C0sA2H65RXCd6QgG(bh) {
    try {
      console.log('in delete ', bh.input.id);
      console.log('in delete ', bh.input.body);
      console.log('in delete', bh.input.inside);
      console.log('in delete', bh.input.params);

      bh = await this.sd_QMFCL7gycJ6Akgzo(bh);
      //appendnew_next_sd_C0sA2H65RXCd6QgG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C0sA2H65RXCd6QgG');
    }
  }

  async sd_QMFCL7gycJ6Akgzo(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteincident/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_s18xoaYn9TkTIDVu(bh);
      //appendnew_next_sd_QMFCL7gycJ6Akgzo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QMFCL7gycJ6Akgzo');
    }
  }

  async sd_s18xoaYn9TkTIDVu(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_s18xoaYn9TkTIDVu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s18xoaYn9TkTIDVu');
    }
  }

  async sd_t6UZ7a1x4g6KVsUw(bh) {
    try {
      console.log('in edit ', bh.input.userdetail);
      bh.input.body = bh.input.userdetail;
      console.log('in edit2 ', bh.input.id);

      bh = await this.sd_khE7hTH0SSYUNPuF(bh);
      //appendnew_next_sd_t6UZ7a1x4g6KVsUw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t6UZ7a1x4g6KVsUw');
    }
  }

  async sd_khE7hTH0SSYUNPuF(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateincident/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_A7wsCo4TlxrDY3zK(bh);
      //appendnew_next_sd_khE7hTH0SSYUNPuF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_khE7hTH0SSYUNPuF');
    }
  }

  async sd_A7wsCo4TlxrDY3zK(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_sd_A7wsCo4TlxrDY3zK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A7wsCo4TlxrDY3zK');
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
