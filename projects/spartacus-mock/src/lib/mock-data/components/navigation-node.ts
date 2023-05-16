import { faker } from '@faker-js/faker';
import { CmsNavigationEntry, CmsNavigationNode } from '@spartacus/core';

const getNavigationNode = (
  uid: string,
  entries: CmsNavigationEntry[],
  children: CmsNavigationNode[],
  title?: string
): CmsNavigationNode => {
  const navigationNode = {
    uid,
    uuid: faker.datatype.uuid(),
    entries,
    children: [],
  } as CmsNavigationNode;

  if (title) {
    navigationNode.title = title;
  }

  for (const child of children) {
    navigationNode.children?.push(
      getNavigationNode(child.uid || '', child.entries || [], child.children || [], child.title)
    );
  }

  return navigationNode;
};

export const navigationNodeComponent = (
  uid: string,
  entries: CmsNavigationEntry[],
  children: CmsNavigationNode[],
  title?: string
): CmsNavigationNode => {
  return getNavigationNode(uid, entries, children, title);
};
