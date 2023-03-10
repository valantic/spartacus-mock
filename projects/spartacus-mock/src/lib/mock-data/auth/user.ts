export const user = () => {
  return {
    active: true,
    currency: { active: true, isocode: 'USD', name: 'Dollar', symbol: 'USD' },
    customerId: '85c9e5b9-8924-474d-8f44-ec15b14c5888',
    displayUid: 'hans.muster@gmail.com',
    firstName: 'Hans',
    language: { active: true, isocode: 'de', name: 'German', nativeName: 'Deutsch' },
    defaultAddress: {
      phone: '012 345 67 89',
      line1: 'Musterstrasse',
      line2: '1',
      postalCode: '1234',
      town: 'Musterstadt',
    },
    lastName: 'Muster',
    name: 'Hans Muster',
    selected: false,
    title: 'Mr.',
    titleCode: 'mr',
    type: 'userWsDTO',
    uid: 'hans.muster@gmail.com',
  };
};
