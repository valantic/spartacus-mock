import { Occ } from '@spartacus/core';
import { ContentPages, MockConfig, Page, Pages } from '../../types';
import { defaultPages } from './default-pages';
import { PageFactoryService } from './page-factory.service';

/**
 * The PageService takes the custom Pages provided from the MockConfig and merges them with the default pages
 */
export class PageService {
  customContentPages?: ContentPages;
  customHomePage?: Page;
  customProductDetailPage?: Page;
  customProductCategoryPage?: Page;

  constructor(private config: MockConfig, private pageFactoryService: PageFactoryService) {
    if (config.contentPages) {
      this.customContentPages = config.contentPages;
    }

    if (config.productDetailPage) {
      this.customProductDetailPage = config.productDetailPage;
    }

    if (config.productCategoryPage) {
      this.customProductCategoryPage = config.productCategoryPage;
    }

    if (config.homePage) {
      this.customHomePage = config.homePage;
    }
  }

  getMockPage(pageType?: string, pageLabelOrId?: string, productCode?: string): Occ.CMSPage | null {
    const pages: Pages = {
      ...defaultPages(this.pageFactoryService),
      ...this.customContentPages,
    };

    if (!pageType && !pageLabelOrId) {
      return this.customHomePage || this.pageFactoryService.createHomePage();
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
        return this.customProductCategoryPage || this.pageFactoryService.createProductCategoryPage();

      case 'ProductPage':
        return this.customProductDetailPage || this.pageFactoryService.createProductDetailPage(productCode || '');
    }

    return null;
  }
}
