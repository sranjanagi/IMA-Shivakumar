let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class serverservice1 {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'serverservice1';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new serverservice1(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_serverservice1_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: serverservice1');

    //appendnew_flow_serverservice1_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: serverservice1');

    if (!this.swaggerDocument['paths']['/addincident']) {
      this.swaggerDocument['paths']['/addincident'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addincident']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addincident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_7QaWh1Hq3oQ4xoHA(bh);
          //appendnew_next_sd_hMm2633DmbqCRcK7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hMm2633DmbqCRcK7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getincidentdata']) {
      this.swaggerDocument['paths']['/getincidentdata'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getincidentdata']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getincidentdata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_NqQGKCTigZGgBjYW(bh);
          //appendnew_next_sd_TXq2GWrQ6925c7IG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TXq2GWrQ6925c7IG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateincident/{id}']) {
      this.swaggerDocument['paths']['/updateincident/{id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateincident/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateincident/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sdsdsd(bh);
          //appendnew_next_sd_zF3GMVPUpYF3ipwM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zF3GMVPUpYF3ipwM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteincident/{id}']) {
      this.swaggerDocument['paths']['/deleteincident/{id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteincident/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/deleteincident/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_JjKDm8Ha5i9NmJd2(bh);
          //appendnew_next_sd_Xmoavhlt18IMSSSj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Xmoavhlt18IMSSSj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_serverservice1_HttpIn
  }
  //   service flows_serverservice1

  //appendnew_flow_serverservice1_start

  async sd_7QaWh1Hq3oQ4xoHA(bh) {
    try {
      console.log('in server', bh.input.body);
      bh = await this.sd_qkFppeiSdXdUKcba(bh);
      //appendnew_next_sd_7QaWh1Hq3oQ4xoHA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7QaWh1Hq3oQ4xoHA');
    }
  }

  async sd_qkFppeiSdXdUKcba(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_GWSS496E2oBTBDzK',
        'incidentman',
        bh.input.body,
        {}
      );
      await this.sd_JKG3uk09iaG3pNYb(bh);
      //appendnew_next_sd_qkFppeiSdXdUKcba
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qkFppeiSdXdUKcba');
    }
  }

  async sd_JKG3uk09iaG3pNYb(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JKG3uk09iaG3pNYb');
    }
  }

  async sd_NqQGKCTigZGgBjYW(bh) {
    try {
      bh.local.query = {};
      bh = await this.sd_92FN8ASpyaHGE1EX(bh);
      //appendnew_next_sd_NqQGKCTigZGgBjYW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NqQGKCTigZGgBjYW');
    }
  }

  async sd_92FN8ASpyaHGE1EX(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_GWSS496E2oBTBDzK',
        'incidentman',
        bh.local.query,
        {}
      );
      await this.sd_A8LTVU1TYXEdvtfx(bh);
      //appendnew_next_sd_92FN8ASpyaHGE1EX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_92FN8ASpyaHGE1EX');
    }
  }

  async sd_A8LTVU1TYXEdvtfx(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A8LTVU1TYXEdvtfx');
    }
  }

  async sdsdsd(bh) {
    try {
      console.log(bh.input.query);
      console.log(bh.input.params);
      console.log('in edit', bh.input.body);
      bh.input.body = { $set: bh.input.body };
      bh.input.query = bh.input.params.id;
      const ObjectID = require('mongodb').ObjectID;
      bh.local.query = { _id: new ObjectID(bh.input.params.id) };

      bh = await this.sd_7aWLYxF9axj6P17U(bh);
      //appendnew_next_sdsdsd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T6DrD1VQiSfbZaLG');
    }
  }

  async sd_7aWLYxF9axj6P17U(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_GWSS496E2oBTBDzK',
        'incidentman',
        bh.local.query,
        bh.input.body,
        {}
      );
      await this.output(bh);
      //appendnew_next_sd_7aWLYxF9axj6P17U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7aWLYxF9axj6P17U');
    }
  }

  async output(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yYRYxW0qZClC1y3u');
    }
  }

  async sd_JjKDm8Ha5i9NmJd2(bh) {
    try {
      console.log(bh.input.body);
      console.log('innn');
      console.log(bh.input.params.id);
      bh.input.query = bh.input.params.id;
      const ObjectID = require('mongodb').ObjectID;
      bh.input.query = { _id: new ObjectID(bh.input.params.id) };
      //bh.input.query={"subject":"shivakumar"}

      //console.log("in server",bh.input.update);
      bh = await this.sd_krwtTLnaEUveoFbh(bh);
      //appendnew_next_sd_JjKDm8Ha5i9NmJd2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JjKDm8Ha5i9NmJd2');
    }
  }

  async sd_krwtTLnaEUveoFbh(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().deleteOne(
        'sd_GWSS496E2oBTBDzK',
        'incidentman',
        bh.input.query,
        {}
      );
      await this.outputofDelete(bh);
      //appendnew_next_sd_krwtTLnaEUveoFbh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_krwtTLnaEUveoFbh');
    }
  }

  async outputofDelete(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lzklFMHzLkofYdnx');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_serverservice1_Catch
}
