import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function prepare(): Promise<ServiceWorkerRegistration | undefined> {
  if (!environment.mockServer) {
    return undefined;
  }

  const { prepareMockServer } = await import(/* webpackChunkName: "mock-server" */ './mock-server');

  return prepareMockServer();
}

prepare().then(() =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))
);
