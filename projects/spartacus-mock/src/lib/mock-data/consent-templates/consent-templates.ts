export const consentTemplates = () => {
  // consent templates normally returns an empty string
  return {
    consentTemplates: [{
      description: 'This is a sample marketing consent description that will need to be updated or replaced, based on the valid registration consent required.',
      id: 'MARKETING_NEWSLETTER',
      name: 'I approve to this sample MARKETING consent',
      version: 0
    }, {
      description: 'We would like to store your browsing behaviour so that our website can dynamically present you with a personalised browsing experience and our customer support agents can provide you with contextual customer support.',
      id: 'PROFILE',
      name: 'Allow SAP Commerce Cloud, Context-Driven Services tracking',
      version: 0
    }, {
      description: 'This is a sample store user information consent description that will need to be updated or replaced.',
      id: 'STORE_USER_INFORMATION',
      name: 'I approve to this sample STORE USER INFORMATION consent',
      version: 0
    }]
  };
};
