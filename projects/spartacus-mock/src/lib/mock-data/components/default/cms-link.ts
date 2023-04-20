export const cmsLinkComponent = (
  name: string,
  uid: string,
  uuid: string,
  linkText: string,
  linkUrl: string,
  external: string = 'false',
  target: string = 'false',
  contentPage?: string,
  contentPageLabelOrId?: string
) => {
  let linkComponent = {
    uid,
    uuid,
    typeCode: 'CMSLinkComponent',
    modifiedtime: '2021-01-18T18:14:59.237Z',
    name,
    container: 'false',
    external,
    linkName: linkText,
    url: linkUrl,
    target,
  };

  if (contentPage) {
    linkComponent = {
      ...linkComponent,
      // @ts-ignore
      contentPage,
    };
  }

  if (contentPageLabelOrId) {
    linkComponent = {
      ...linkComponent,
      // @ts-ignore
      contentPageLabelOrId,
    };
  }

  return linkComponent;
};
