import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { footerSlots } from '../slots/footer-slots';
import { bottomHeaderSlot, headerSlots } from '../slots/header-slots';
import { homeContentSlots } from '../slots/home-content-slots';
import { productDetailContentSlots } from '../slots/product-detail-content-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';

export class PageFactoryService {
  private _customSlots: Occ.ContentSlot[] = [];

  constructor(protected customSlots?: Occ.ContentSlot[]) {
    if (customSlots?.length) {
      this._customSlots = customSlots;
    }
  }

  public createContentPage(
    pageLabelOrId: string,
    title: string,
    contentSlots: Occ.ContentSlot[],
    template?: string
  ): Occ.CMSPage {
    return {
      uid: `contentPage${faker.datatype.uuid()}`,
      title,
      template: template ?? 'ContentPage1Template',
      typeCode: 'ContentPage',
      name: title ?? 'dummy title',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
          ...contentSlots,
          ...footerSlots(),
          ...this._customSlots,
        ],
      },
      label: pageLabelOrId,
    };
  }

  public createProductCategoryPage(): Occ.CMSPage {
    return {
      uid: `categoryPage-${faker.datatype.uuid()}`,
      title: 'Product List',
      template: 'ProductListPageTemplate',
      typeCode: 'CategoryPage',
      name: 'Product List',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
          ...cmsSearchContentSlots('ProductListSlot', 'CMSProductListComponent'),
          ...footerSlots(),
          ...this._customSlots,
        ],
      },
    };
  }

  public createHomePage(): Occ.CMSPage {
    return {
      uid: 'homepage',
      title: 'Homepage',
      template: 'LandingPage2Template',
      typeCode: 'ContentPage',
      name: 'Homepage',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [...headerSlots(), ...homeContentSlots(), ...footerSlots(), ...this._customSlots],
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
        contentSlot: [...headerSlots(), ...productDetailContentSlots(), ...footerSlots(), ...this._customSlots],
      },
    };
  }

  public createLoginPage(): Occ.CMSPage {
    return {
      uid: `loginPage${faker.datatype.number(1000)}`,
      title: `Login Page`,
      template: 'LoginPageTemplate',
      typeCode: 'ContentPage',
      name: 'Content Page',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
          contentSlot('LeftContentSlot', [
            flexTypeComponent('ReturningCustomerLoginComponent'),
            flexTypeComponent('ReturningCustomerRegisterComponent'),
          ]),
          ...footerSlots(),
          ...this._customSlots,
        ],
      },
      label: '/login',
    };
  }

  public createRegisterPage(): Occ.CMSPage {
    return {
      uid: `loginPage${faker.datatype.number(1000)}`,
      title: `Register Page`,
      template: 'AccountPageTemplate',
      typeCode: 'ContentPage',
      name: 'Register Page',
      robotTag: Occ.PageRobots.INDEX_FOLLOW,
      contentSlots: {
        contentSlot: [
          ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
          contentSlot('BodyContent', [flexTypeComponent('RegisterCustomerComponent')]),
          ...footerSlots(),
          ...this._customSlots,
        ],
      },
      label: '/login/register',
    };
  }
}
