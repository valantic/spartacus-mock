import { MockConfig } from '@valantic/spartacus-mock';
import { environment } from '../environments/environment';
import { handlers } from './handlers';
import { passThroughRequests } from './pass-through';

export const mockConfig: MockConfig = {
  enableWorker: environment.mockServer || false,
  environment,
  passThroughRequests,
  handlers,
};

export async function prepareMockServer(): Promise<ServiceWorkerRegistration | undefined> {
  const { prepareMock } = await import(/* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock');

  return prepareMock(mockConfig);
}
