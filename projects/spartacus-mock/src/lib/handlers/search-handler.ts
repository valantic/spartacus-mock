import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { suggestionList } from '../mock-data';

export const getSearchHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.searchSuggestions, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(suggestionList()));
    }),
  ];
};
