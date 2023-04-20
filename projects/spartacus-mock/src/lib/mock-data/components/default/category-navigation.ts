import { navigationNodeComponent } from './navigation-node';
import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const categoryNavigationComponent = (): Component => {
  return flexTypeComponent('CategoryNavigationComponent', undefined, {
    wrapAfter: '10',
    navigationNode: navigationNodeComponent(
      'ElectronicsCategoryNavComponent',
      [],
      [
        {
          uid: 'BrandsNavNode',
          entries: [
            {
              itemId: 'AllBrandsCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [
            {
              uid: 'BrandLinksNavNode',
              entries: [],
              title: 'Cameras',
            },
            {
              uid: 'AccessoryBrandLinksNavNode',
              entries: [],
              title: 'Accessories',
            },
          ],
          title: 'Brands',
        },
        {
          uid: 'DigitalCamerasNavNode',
          entries: [
            {
              itemId: 'DigitalCamerasCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [
            {
              uid: 'DigitalCompactsNavNode',
              entries: [
                {
                  itemId: 'DigitalCompactsCategoryLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'DigitalSLRNavNode',
              entries: [
                {
                  itemId: 'DigitalSLRCategoryLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
          ],
          title: 'Digital Cameras',
        },
        {
          uid: 'FilmCamerasNavNode',
          entries: [
            {
              itemId: 'FilmCamerasCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          title: 'Film Cameras',
        },
        {
          uid: 'HandheldCamcordersNavNode',
          entries: [
            {
              itemId: 'HandheldCamcordersCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          title: 'Camcorders',
        },
        {
          uid: 'WebcamsNavNode',
          entries: [
            {
              itemId: 'WebcamsCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          title: 'Webcams',
        },
        {
          uid: 'CameraAccessoriesNavNode',
          entries: [
            {
              itemId: 'CameraAccessoriesCategoryLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [
            {
              uid: 'AccessoriesNavNode',
              entries: [],
              children: [
                {
                  uid: 'CamerasFlashesNavNode',
                  entries: [
                    {
                      itemId: 'CamerasFlashesCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
                {
                  uid: 'TripodsNavNode',
                  entries: [
                    {
                      itemId: 'TripodsCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
                {
                  uid: 'CameraLensesNavNode',
                  entries: [
                    {
                      itemId: 'CameraLensesCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
                {
                  uid: 'FlashMemoryNavNode',
                  entries: [
                    {
                      itemId: 'FlashMemoryCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                  title: 'Flash Memory',
                },
                {
                  uid: 'PowerSuppliesNavNode',
                  entries: [
                    {
                      itemId: 'PowerSuppliesCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                  title: 'Power Supplies',
                },
              ],
              title: 'Gear',
            },
            {
              uid: 'SuppliesNavNode',
              entries: [],
              children: [
                {
                  uid: 'ColourFilmsNavNode',
                  entries: [
                    {
                      itemId: 'ColourFilmsCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
                {
                  uid: 'BlackAndWhiteFilmsNavNode',
                  entries: [
                    {
                      itemId: 'BlackAndWhiteFilmsCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
                {
                  uid: 'BlankVideotapesNavNode',
                  entries: [
                    {
                      itemId: 'BlankVideotapesCategoryLink',
                      itemSuperType: 'AbstractCMSComponent',
                      itemType: 'CMSLinkComponent',
                    },
                  ],
                  children: [],
                },
              ],
              title: 'Supplies',
            },
          ],
          title: 'Accessories',
        },
      ]
    ),
  });
};
