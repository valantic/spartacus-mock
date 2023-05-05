import { RestRequest } from 'msw';

export const readUrlParams = (req: RestRequest, param: string): string => {
  return (req.params[param] as string) || '';
};

export const readSearchParams = (req: RestRequest, param: string): string => {
  return req.url.searchParams.get(param) || '';
};
