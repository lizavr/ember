import BaseRequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { JsonSuffixHandler } from 'beaver/utils/handlers';

export default class RequestManager extends BaseRequestManager {
  constructor(args) {
    super(args);

    this.use([JsonSuffixHandler, Fetch]);
  }
}
