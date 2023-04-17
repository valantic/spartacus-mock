import { getSharedAddress } from '../account/addresses';
import { getCurrency } from '../general/currencies';

export const user = () => {
  return {
    active: true,
    currency: getCurrency('USD', 'US Dollar', '$'),
    customerId: '85c9e5b9-8924-474d-8f44-ec15b14c5888',
    displayUid: 'hans.muster@gmail.com',
    firstName: 'Hans',
    language: { active: true, isocode: 'de', name: 'German', nativeName: 'Deutsch' },
    defaultAddress: getSharedAddress(),
    lastName: 'Muster',
    name: 'Hans Muster',
    selected: false,
    title: 'Mr.',
    titleCode: 'mr',
    type: 'userWsDTO',
    uid: 'hans.muster@gmail.com',
  };
};
