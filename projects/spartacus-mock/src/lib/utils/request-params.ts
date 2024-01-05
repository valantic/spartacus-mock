import { PathParams } from 'msw';

export const readUrlParams = (params: PathParams<string>, paramName: string): string => {
  return (params[paramName] as string) || '';
};

export const readSearchParams = (request: Request, param: string): string | undefined => {
  // Construct a URL instance out of the intercepted request.
  const url = new URL(request.url);

  // Read the "param" URL query parameter using the "URLSearchParams" API.
  return url.searchParams.get(param) || undefined;
};
