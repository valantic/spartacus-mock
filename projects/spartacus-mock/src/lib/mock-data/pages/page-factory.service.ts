import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { contentSlot, flexTypeComponent } from '../components';
import { breadcrumbComponent } from '../components/breadcrumb';
import { footerSlots } from '../slots/footer-slots';
import { bottomHeaderSlot, headerSlots } from '../slots/header-slots';
import { homeContentSlots } from '../slots/home-content-slots';
import { productDetailContentSlots } from '../slots/product-detail-content-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';
import { ContentSlot } from '../../types';

export class PageFactoryService {
  private _customSlots: Occ.ContentSlot[] = [];
  private _headerSlotsWithBreadCrumb: ContentSlot[] = [];
  private _headerSlots: ContentSlot[] = [];
  private _footerSlots: ContentSlot[] = [];

  constructor(protected customSlots?: Occ.ContentSlot[]) {
    if (customSlots?.length) {
      this._customSlots = customSlots;
    }
    this._headerSlotsWithBreadCrumb = headerSlots([bottomHeaderSlot([breadcrumbComponent()])]);
    this._headerSlots = headerSlots();
    this._footerSlots = footerSlots();
  }

  private _getGlobalSlots(defaultSlots: Occ.ContentSlot[]): Occ.ContentSlot[] {
    if (!this._customSlots?.length) {
      return defaultSlots;
    }

    return [
      ...defaultSlots.filter((slot) => !this._customSlots.some((customSlot) => customSlot.slotId === slot.slotId)),
      ...this._customSlots,
    ];
  }

  public createContentPage(
    label: string,
    title: string,
    contentSlots: Occ.ContentSlot[],
    template?: string
  ): Occ.CMSPage {
    return {
      label,
      uid: `contentPage${faker.string.uuid()}`,
      title,
      template: template ?? 'ContentPage1Template',
      typeCode: 'ContentPage',
      name: title ?? 'dummy title',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...this._getGlobalSlots([...this._headerSlotsWithBreadCrumb, ...this._footerSlots]),
          ...contentSlots,
        ],
      },
    };
  }

  public createProductCategoryPage(): Occ.CMSPage {
    return {
      uid: `categoryPage-${faker.string.uuid()}`,
      title: 'Product List',
      template: 'ProductListPageTemplate',
      typeCode: 'CategoryPage',
      name: 'Product List',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...this._getGlobalSlots([...this._headerSlotsWithBreadCrumb, ...this._footerSlots]),
          ...cmsSearchContentSlots('ProductListSlot', 'CMSProductListComponent'),
        ],
      },
    };
  }

  public createHomePage(): Occ.CMSPage {
    return {
      label: 'homepage',
      uid: 'homepage',
      title: 'Homepage',
      template: 'LandingPage2Template',
      typeCode: 'ContentPage',
      name: 'Homepage',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [...this._getGlobalSlots([...this._headerSlots, ...this._footerSlots]), ...homeContentSlots()],
      },
    };
  }

  public createProductDetailPage(code: string): Occ.CMSPage {
    return {
      uid: `productDetailPage${code}`,
      title: `Product with Code ${code}`,
      template: 'ProductDetailsPageTemplate',
      typeCode: 'ProductPage',
      name: 'Product Detail Page',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...this._getGlobalSlots([...this._headerSlots, ...this._footerSlots]),
          ...productDetailContentSlots(),
        ],
      },
    };
  }

  public createLoginPage(): Occ.CMSPage {
    return {
      label: '/login',
      uid: `loginPage${faker.number.int(1000)}`,
      title: `Login Page`,
      template: 'LoginPageTemplate',
      typeCode: 'ContentPage',
      name: 'Content Page',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...this._getGlobalSlots([...this._headerSlotsWithBreadCrumb, ...this._footerSlots, ...footerSlots()]),
          contentSlot('LeftContentSlot', [
            flexTypeComponent('ReturningCustomerLoginComponent'),
            flexTypeComponent('ReturningCustomerRegisterComponent'),
          ]),
        ],
      },
    };
  }

  public createRegisterPage(): Occ.CMSPage {
    return {
      label: '/login/register',
      uid: `loginPage${faker.number.int(1000)}`,
      title: `Register Page`,
      template: 'AccountPageTemplate',
      typeCode: 'ContentPage',
      name: 'Register Page',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...this._getGlobalSlots([...this._headerSlotsWithBreadCrumb, ...this._footerSlots, ...footerSlots()]),
          contentSlot('BodyContent', [flexTypeComponent('RegisterCustomerComponent')]),
        ],
      },
    };
  }
}
