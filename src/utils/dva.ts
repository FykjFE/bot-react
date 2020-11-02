import { create } from 'dva-core';
import models from 'models/index';
import { persistEnhancer } from 'dva-model-persist';

export function initStore(): any {
  const app = create({
    extraEnhancers: [
      persistEnhancer({
        key: 'fykj',
      }),
    ],
  });
  models.forEach((model: any) => app.model(model));
  app.start();
  return app._store;
}
