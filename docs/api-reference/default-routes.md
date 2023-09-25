# Default Routes

Spartacus-mock comes with a set auf default [routes](../getting-started/terminology.md). These routes are used for the [handlers](../getting-started/terminology.md) that are provided by spartacus-mock.
The routes cover all OCC Api Calls that are done by spartacus covering the features mentioned in the [feature scope](../README.md).

You can use those routes to define your own handler for a certain route.

> Please note: if you need to enhance the route or add custom parameters, you need to define the route yourself.

| Base Calls   | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `baseSites`  | Route for the baseSites call being done by spartacus on application startup                                                                                                                                                                                                                                                                                                                                                                                                          |
| `languages`  | Route for the languages call being done by spartacus on application startup                                                                                                                                                                                                                                                                                                                                                                                                          |
| `currencies` | Route for the currencies call being done by spartacus on application startup                                                                                                                                                                                                                                                                                                                                                                                                         |
| `titles`     | Route for the titles call being done by spartacus when showing the address form                                                                                                                                                                                                                                                                                                                                                                                                      |
| `countries`  | Route for the countries call being done by spartacus when showing the address form                                                                                                                                                                                                                                                                                                                                                                                                   |
| `regions`    | Route for the regions call being done by spartacus when showing the address form                                                                                                                                                                                                                                                                                                                                                                                                     |
| `i18n`       | Route for the i18n call to load the translations from the [backend](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/eaef8c61b6d9477daf75bff9ac1b7eb4/775e61ed219c4999852d43be5244e94a.html?q=i18n#lazy-loading-from-a-remote-endpoint). The route is defined with the value `<occ-base-url>/<occ-prefix>/<base-site-ide>/i18n/${language}/${namespace}`. `baseUrl` and `occPrefix` are taken from the provided environment. Backend Adjustments are needed to use this. |

| User related Calls        | Explanation                                                                     |
| ------------------------- | ------------------------------------------------------------------------------- |
| `authLogin`               | Route for the login call to the authorizationserver                             |
| `authRevoke`              | Route for the logout call to the authorizationserver                            |
| `users`                   | Route for the users call to create a new user during registration               |
| `user`                    | Route for the user call to get the user details after login                     |
| `consentTemplates`        | Route for the call to get the consent templates for the current user            |
| `notificationPreferences` | Route for the call to get the notification preferences for the current user     |
| `productInterests`        | Route for the call to get the product interests for the current user            |
| `customerCoupons`         | Route for the call to get the customer coupons for the current user             |
| `addresses`               | Route for the call to get the addresses for the current user                    |
| `payments`                | Route for the call to get the payment details for the current user              |
| `addressVerification`     | Route for the call to get execute the address verification for the current user |

| CMS Calls    | Explanation                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| `pages`      | Route for the call to get the page data (basic page data & slots with components) for the current page  |
| `components` | Route for the call to get the component data (spartacus does this call with aggregated component Uid's) |

| Product Calls       | Explanation                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `productReferences` | Route for the call to get the product references for the current product (works on product detail page) |
| `productReviews`    | Route for the call to get the product references for the current product (works on product detail page) |
| `productSearch`     | Route for the call to search for products and return a productSearchPage Object                         |
| `searchSuggestions` | Route for the call to search for text based product suggestions                                         |
| `product`           | Route for the call to load the product details                                                          |

| Cart Calls          | Explanation                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `carts`             | Route for the call to load the carts for a user. The returned array can contain multiple (normal, wishlist, selective) carts. |
| `cart`              | Route for the call to load the cart data for a certain cartId                                                                 |
| `addEntries         | Route for the call to add an entry to cart                                                                                    |
| `updateEntries`     | Route for the call to update an entry in the cart                                                                             |
| `removeEntries`     | Route for the call to remove an entry from the cart                                                                           |
| `deleteCart`        | Route for the call to delete a cart                                                                                           |
| `addEmail`          | Route for the call to set an email on the cart (needed for guest checkout)                                                    |
| `cartVoucher`       | Route for the call to add a voucher on the cart                                                                               |
| `cartVoucherRemove` | Route for the call to remove a voucher from the cart                                                                          |
| `validate`          | Route for the call to validate the cart                                                                                       |
| `saveCart`          | Route for the call to save a cart as wishlist cart for user logging in and not having a wishlist cart yet                     |

| Checkout Calls           | Explanation                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `setDeliveryAddress`     | Route for the call to set a delivery address on the cart during checkout                                              |
| `createDeliveryAddress`  | Route for the call to create a new delivery address on the cart during checkout                                       |
| `removeDeliveryAddress`  | Route for the call to remove a delivery address on the cart during checkout                                           |
| `deliveryMode`           | Route for the call to set a delivery mode on the cart during checkout                                                 |
| `deliveryModes`          | Route for the call to get all available delivery modes                                                                |
| `cardTypes`              | Route for the call to get all available card types for payment                                                        |
| `paymentProviderSubInfo` | Route for the call to get the payment provider sub info when using an integrated payment provider (default spartacus) |
| `createPaymentDetails`   | Route for the call to create a new payment method                                                                     |
| `setCartPaymentDetails`  | Route for the call to set an existing payment method on the cart                                                      |
| `sopMockProcess`         | Route for the call to get the mock sop payment response (html page)                                                   |

| Order Calls         | Explanation                                               |
| ------------------- | --------------------------------------------------------- |
| `placeOrder`        | Route for the call to place the order                     |
| `orderHistory`      | Route for the call to load the orders for a user          |
| `orderDetail`       | Route for the call to load the order details for an order |
| `cancelOrder`       | Route for the call to cancel an order                     |
| `returnOrder`       | Route for the call to return an order                     |
| `orderReturns`      | Route for the call to load the order returns              |
| `orderReturnDetail` | Route for the call to load the the order return details   |
| `cancelReturn`      | Route for the call to cancel an order return              |

| Account Calls            | Explanation                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `restoreSavedCart`       | Route for the call to restore a saved cart                       |
| `cloneSavedCart`         | Route for the call to clone a saved cart                         |
| `savedCart`              | Route for the call to get a saved cart                           |
| `addressDetail`          | Route for the call to change / delete an address                 |
| `paymentDetail`          | Route for the call to delete an payment type                     |
| `userUpdatePassword`     | Route for the call to update the user password                   |
| `userUpdateLoginId`      | Route for the call to update the user id (email)                 |
| `consentDetail`          | Route for the call to delete a previously given consent          |
| `consents`               | Route for the call to get all consents of a user                 |
| `notificationPreference` | Route for the call to get the notification preferences of a user |

| Store Finder Calls | Explanation                                    |
| ------------------ | ---------------------------------------------- |
| `storescounts`     | Route for the call to get the number of stores |
| `stores`           | Route for the call to get the stores           |
| `store`            | Route for the call to get the store details    |
