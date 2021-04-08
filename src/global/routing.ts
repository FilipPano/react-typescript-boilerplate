import * as _ from 'lodash-es';

const appendPath = (...paths: (string|number)[]) => _.join(paths, '/');

const HOME = {
  getPath: (): string => appendPath('/'),
};

const PRODUCT = {
  getPath: (params: Record<'id', string>): string => appendPath(
    '/product',
    params.id,
  ),
};

export const Routing = {
  HOME,
  PRODUCT,
};
