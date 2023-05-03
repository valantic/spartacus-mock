import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import { bottomHeaderSlot, headerSlots } from '../slots/header-slots';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { footerSlots } from '../slots/footer-slots';

export class ContentPage {
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
}
