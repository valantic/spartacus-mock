import { faker } from '@faker-js/faker';

export const cmsTabParagraphContainerComponent = (uid: string, name: string, components: string) => {
  return {
    uid,
    uuid: faker.datatype.uuid(),
    typeCode: 'CMSTabParagraphContainer',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name,
    container: 'true',
    components,
  };
};

export const cmsTabParagraphComponent = (uid: string, name: string, content: string) => {
  return {
    uid,
    uuid: faker.datatype.uuid(),
    typeCode: 'CMSTabParagraphComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name,
    content
  };
};

