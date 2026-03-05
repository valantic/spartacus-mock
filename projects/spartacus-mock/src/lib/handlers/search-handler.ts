import { HttpResponse, RequestHandler, http } from 'msw';
import { suggestionList } from '../mock-data';

export const getSearchHandlers = (routes: any): RequestHandler[] => {
  return [
    http.get(routes.searchSuggestions, () => {
      return HttpResponse.json(suggestionList());
    }),
  ];
};
