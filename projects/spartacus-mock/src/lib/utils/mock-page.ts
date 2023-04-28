import { contentPages, OccCmsPageExtended, Pages } from '../mock-data/pages';
import { homePage } from '../mock-data/pages/home';
import { productCategoryPage } from '../mock-data/pages/product-category';
import { productDetailPage } from '../mock-data/pages/product-detail';

export function getMockPage(
  pageType?: string,
  pageLabelOrId?: string,
  productCode?: string
): OccCmsPageExtended | null {
  const pages: Pages = contentPages();

  if (!pageType && !pageLabelOrId) {
    return homePage();
  }

  switch (pageType) {
    case 'ContentPage':
      if (!pageLabelOrId) break;

      const pageLabelOrIdSanitized = pageLabelOrId.startsWith('/')
        ? pageLabelOrId.slice(1, pageLabelOrId.length)
        : pageLabelOrId;
      const lookupPageKey =
        Object.keys(pages).find((mockPageLabelOrId) => pageLabelOrIdSanitized.startsWith(mockPageLabelOrId)) || '';

      if (lookupPageKey) {
        return pages[lookupPageKey];
      }
      break;

    case 'CategoryPage':
      return productCategoryPage();

    case 'ProductPage':
      return productDetailPage(productCode || '');
  }

  return null;
}
