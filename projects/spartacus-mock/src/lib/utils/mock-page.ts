import { contentPages } from '../mock-data/pages';
import { homePage } from '../mock-data/pages/home';
import { productCategoryPage } from '../mock-data/pages/product-category';
import { productDetailPage } from '../mock-data/pages/product-detail';
import { Occ } from '@spartacus/core';
import { ContentPages, Page, Pages } from '../types';
import { ContentPage } from '../mock-data';

export class MockContentPages {
  customContentPages?: ContentPages;
  customHomePage?: Page;
  customProductDetailPage?: Page;
  productCategoryPage?: Page;

  setCustomContentPages(pages: ContentPages): void {
    this.customContentPages = pages;
  }

  setCustomHomePage(page: Page): void {
    this.customHomePage = page;
  }

  setCustomProductDetailPage(page: Page): void {
    this.customProductDetailPage = page;
  }

  setCustomProductCategoryPage(page: Page): void {
    this.productCategoryPage = page;
  }

  getMockPage(
    contentPage: ContentPage,
    pageType?: string,
    pageLabelOrId?: string,
    productCode?: string
  ): Occ.CMSPage | null {
    const pages: Pages = {
      ...contentPages(contentPage),
      ...this.customContentPages,
    };

    if (!pageType && !pageLabelOrId) {
      return this.customHomePage || homePage();
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
        return this.productCategoryPage || productCategoryPage();

      case 'ProductPage':
        return this.customProductDetailPage || productDetailPage(productCode || '');
    }

    return null;
  }
}
