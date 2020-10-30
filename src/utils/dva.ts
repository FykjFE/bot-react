import { create } from 'dva-core';
import models from 'models/index';

export function initStore() {
  const app = create({});
  models.forEach((model: any) => app.model(model));
  app.start();
  return app._store;
}
