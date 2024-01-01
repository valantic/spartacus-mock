import { HttpHandler, HttpResponse, http } from 'msw';
import { suggestionList } from '../mock-data';

export const getSearchHandlers = (routes: any): HttpHandler[] => {
  return [
    http.get(routes.searchSuggestions, () => {
      return HttpResponse.json(suggestionList());
    }),
  ];
};
