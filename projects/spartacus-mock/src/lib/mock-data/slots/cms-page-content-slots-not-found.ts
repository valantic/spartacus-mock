import { contentSlot } from '../components/default/content-slot';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { ContentSlot } from '../../types';

export const cmsPageContentSlotsNotFound = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3',
      [
        cmsParagraphComponent('RichTextExampleParagraph', 'CMS Content Text Paragraph', 'The page you have requested was not found.'),
        ]
    ),
  ];
};
