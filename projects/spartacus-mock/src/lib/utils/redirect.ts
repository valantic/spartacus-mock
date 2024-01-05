import { HttpResponse } from 'msw';

export function redirect(destination: string, statusCode: number) {
  return new HttpResponse(null, {
    status: statusCode,
    headers: {
      Location: destination,
    },
  });
}
