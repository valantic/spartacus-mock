import { ContentSlot } from '../../types';
import { cmsParagraphComponent, richTextExampleContent } from '../components';
import { contentSlot } from '../components';
import { ResponsiveMediaRendition } from '../components';
import { simpleResponsiveBanner } from '../components';

export const cmsPageContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('Section3', [
      simpleResponsiveBanner('/example-content', {
        code: 'Elec_HomeSpeed_EN_01',
        altText: 'Save Big On Select SLR & DSLR Cameras',
        renditions: [
          {
            key: 'mobile',
            code: 'Banner Homepage',
            width: 480,
            height: 240,
          } as ResponsiveMediaRendition,
          {
            key: 'tablet',
            code: 'Banner Homepage',
            width: 770,
            height: 385,
          } as ResponsiveMediaRendition,
          {
            key: 'desktop',
            code: 'Banner Homepage',
            width: 960,
            height: 480,
          } as ResponsiveMediaRendition,
          {
            key: 'widescreen',
            code: 'Banner Homepage',
            width: 1400,
            height: 700,
          } as ResponsiveMediaRendition,
        ],
      }),
    ]),

    contentSlot('Section3', [cmsParagraphComponent()]),
  ];
};
