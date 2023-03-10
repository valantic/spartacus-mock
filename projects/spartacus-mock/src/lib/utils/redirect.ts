import { compose, context } from 'msw';

export function redirect(destination: string, statusCode: number) {
  return compose(context.status(statusCode), context.set('Location', destination));
}
