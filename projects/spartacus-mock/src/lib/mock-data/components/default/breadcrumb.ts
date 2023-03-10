import { faker } from '@faker-js/faker';

export const breadcrumbComponent = () => {
  return {
    uid: `BreadcrumbComponent-${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    container: 'false',
    modifiedtime: '2021-01-18T18:14:59.021Z',
    name: 'Breadcrumb CMS Component',
    typeCode: 'BreadcrumbComponent',
  };
};
