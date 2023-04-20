import { contentSlot } from '../components/default/content-slot';
import { simpleResponsiveBanner } from '../components/default/simple-responsive-banner';
import { ResponsiveMediaRendition } from '../components/default/media';
import { productCarousel } from '../components/default/product-carousel';
import { ContentSlot } from '../../types';

export const homeContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section1',
      [
        simpleResponsiveBanner(
          '/OpenCatalogue/Cameras/Digital-Cameras/Digital-SLR/c/578',
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
      'Section2A',
      [
        simpleResponsiveBanner(
          '/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/c/576',
          {
            code: 'Elec_HomeFam_EN_01',
            altText: 'Compact Cameras',
            renditions: [
              {
                key: 'mobile',
                code: 'Banner Homepage',
                width: 576,
                height: 432,
              } as ResponsiveMediaRendition,
              {
                key: 'tablet',
                code: 'Banner Homepage',
                width: 495,
                height: 372,
              } as ResponsiveMediaRendition,
              {
                key: 'desktop',
                code: 'Banner Homepage',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition,
              {
                key: 'widescreen',
                code: 'Banner Homepage',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition
            ]
          }
        ),
        simpleResponsiveBanner(
          '/Open-Catalogue/Cameras/CameraAccessories-%26-Supplies/CameraLenses/c/588',
          {
            code: 'Elec_HomeFam_EN_01',
            altText: 'Camera Lenses',
            renditions: [
              {
                key: 'mobile',
                width: 576,
                height: 432,
              } as ResponsiveMediaRendition,
              {
                key: 'tablet',
                width: 495,
                height: 372,
              } as ResponsiveMediaRendition,
              {
                key: 'desktop',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition,
              {
                key: 'widescreen',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition
            ]
          }
        )
      ]
    ),

    contentSlot(
      'Section2B',
      [
        simpleResponsiveBanner(
          '/Open-Catalogue/Cameras/Hand-held-Camcorders/c/584',
          {
            code: 'Elec_HomeCaptureFirst_EN_01',
            altText: 'Camcorders',
            renditions: [
              {
                key: 'mobile',
                width: 576,
                height: 432,
              } as ResponsiveMediaRendition,
              {
                key: 'tablet',
                width: 495,
                height: 372,
              } as ResponsiveMediaRendition,
              {
                key: 'desktop',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition,
              {
                key: 'widescreen',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition
            ]
          }
        ),
        simpleResponsiveBanner(
          '/Open-Catalogue/Cameras/Hand-held-Camcorders/c/816',
          {
            code: 'Elec_HomeCaptureFirst_EN_01',
            altText: 'Power Supplies',
            renditions: [
              {
                key: 'mobile',
                width: 576,
                height: 432,
              } as ResponsiveMediaRendition,
              {
                key: 'tablet',
                width: 495,
                height: 372,
              } as ResponsiveMediaRendition,
              {
                key: 'desktop',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition,
              {
                key: 'widescreen',
                width: 570,
                height: 428,
              } as ResponsiveMediaRendition
            ]
          }
        )
      ]
    ),

    contentSlot(
      'Section2C',
      []
    ),

    contentSlot(
      'Section3',
      [
        productCarousel(['300938', '358639', '553637', '816802', '1934793', '1382080', '1981415', '816780', '1934406', '1986316', '592506'], 'Our Bestselling Products'),
        productCarousel(['932577', '1776948', '1641905', '1981415', '1934796', '2278102', '1992693'], 'What\'s New')
      ]
    ),

    contentSlot(
      'Section4',
      [
        simpleResponsiveBanner(
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
      'Section5',
      []
    ),
  ];
};
