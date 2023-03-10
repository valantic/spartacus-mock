import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { cmsPageContentSlots } from '../slots/cms-page-content-slots';
import { breadcrumbComponent } from '../components/default/breadcrumb';

export const contentPage = (pageType: string, pageLabelOrId: string) => {
    return {
        uid: `contentPage${faker.datatype.number(1000)}`,
        uuid: faker.datatype.uuid(),
        title: 'General Content Page',
        template: 'ContentPage1Template',
        typeCode: pageType,
        name: 'Content Page',
        robotTag: 'INDEX_FOLLOW',
        contentSlots: {
            contentSlot: [
                ...headerSlots(breadcrumbComponent()),
                ...cmsPageContentSlots(),
                ...footerSlots()
            ]
        },
        label: pageLabelOrId
    };
};
