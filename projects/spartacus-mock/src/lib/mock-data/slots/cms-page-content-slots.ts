import { contentSlot } from '../components/default/content-slot';
import { cmsParagraphComponent, richTextExampleContent } from '../components/default/cms-paragraph';
import { simpleResponsiveBanner } from '../components/default/simple-responsive-banner';
import { ResponsiveMediaRendition } from '../components/default/media';
import { ContentSlot } from '../../types';

export const cmsPageContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3Slot-ContentPage',
      'Section3',
      'Section3 Slot for Content Page',
      [
        simpleResponsiveBanner(
          'ElectronicsHompageFreeDelBannerComponent',
          'Electronics Homepage Free Delivery Banner Component',
          '/faq',
          {
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
              } as ResponsiveMediaRendition
            ]
          }
        )
      ]
    ),

    contentSlot(
      'Section3Slot-ContentPage',
      'Section3',
      'Section3 Slot for ContentPage',
      [
        cmsParagraphComponent('RichTextExampleParagraph', 'CMS Content Text Paragraph', richTextExampleContent),
      ]
    ),
  ];
};
