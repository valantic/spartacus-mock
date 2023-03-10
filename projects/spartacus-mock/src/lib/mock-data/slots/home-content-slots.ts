import { contentSlot } from '../components/default/content-slot';
import { simpleResponsiveBanner } from '../components/default/simple-responsive-banner';
import { ResponsiveMediaRendition } from '../components/default/media';
import { productCarousel } from '../components/default/product-carousel';
import { ContentSlot } from '../../types';

export const homeContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section1Slot-Homepage',
      'Section1',
      'Section1 Slot for Homepage',
      [
        simpleResponsiveBanner(
          'ElectronicsHompageSplashBannerComponent',
          'Electronics Homepage Splash Banner Component',
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
      'Section2ASlot-Homepage',
      'Section2A',
      'Section2A Slot for Homepage',
      [
        simpleResponsiveBanner(
          'ElectronicsHompageLightFamBannerComponent',
          'Electronics Homepage Light Family Banner Component',
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
          'ElectronicsHompageLightFamTextBannerComponent',
          'Electronics Homepage Light Family Text Banner Component',
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
      'Section2BSlot-Homepage',
      'Section2B',
      'Section2B Slot for Homepage',
      [
        simpleResponsiveBanner(
          'ElectronicsHompageCamcordersChildBannerComponent',
          'Electronics Homepage Light Family Banner Component Child',
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
          'ElectronicsHompageCamcordersBannerComponent',
          'Electronics Homepage Camcorders Banner Component',
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
      'Section2CSlot-Homepage',
      'Section2C',
      'Section2C Slot for Homepage',
      []
    ),

    contentSlot(
      'Section3Slot-Homepage',
      'Section3',
      'Section3 Slot for Homepage',
      [
        productCarousel('ElectronicsHomepageProductCarouselComponent', 'Electronics Homepage Product Carousel', '300938 358639 553637 816802 1934793 1382080 1981415 816780 1934406 1986316 592506', 'Our Bestselling Products'),
        productCarousel('NewElectronicsHomepageProductCarouselComponent', 'What\'s New Electronics Homepage Product Carousel', '932577 1776948 1641905 1981415 1934796 2278102 1992693', 'What\'s New')
      ]
    ),

    contentSlot(
      'Section4Slot-Homepage',
      'Section4',
      'Section4 Slot for Homepage',
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
      'Section5Slot-Homepage',
      'Section5',
      'Section5 Slot for Homepage',
      []
    ),
  ];
};
