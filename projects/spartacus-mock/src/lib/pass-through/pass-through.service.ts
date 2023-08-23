import { MockRequest } from '../types';
import { defaultPassThroughRequests } from './pass-through-requests';

/**
 * The PassThroughService is responsible for returning all passThrough Requests for the Spartacus Mock Server.
 */
export class PassThroughService {
  constructor() {}

  getPassThroughRequests(): MockRequest[] {
    return defaultPassThroughRequests;
  }
}
