import { flexTypeComponent } from './flex-type-component';

export const cmsTabParagraphContainerComponent = (components: string[]) => {
  return flexTypeComponent('CMSTabParagraphContainer', undefined, {
    components: components.join(' '),
  });
};
