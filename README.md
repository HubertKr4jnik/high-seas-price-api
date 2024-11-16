<a id="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
  <h2 align="center">High Seas Shop API</h2>

  <p align="center">
    An API to get json data about all or one specified item from the Hack Club High Seas store.
    <br />
</div>

<!-- API USAGE INSTRUCTIONS -->
## Usage instructions

The API has 2 endpionts:

* https://high-seas-shop-api.hubert-krajnik.hackclub.app/api/

* https://high-seas-shop-api.hubert-krajnik.hackclub.app/api/item-name

The first one returns data about all items and the second returns data about an item that you specified in the place of "item-name". The item name should be the same an the one shown in the <a href="https://highseas.hackclub.com/shop">High Seas Store</a>. E.g. "iPad"


An example response looks like this:
```
{
    "id":"item_ipad_46",
    "name":"iPad",
    "subtitle":"10th gen (w/ Apple Pencil!)",
    "imageUrl":"https://noras-secret-cdn.hackclub.dev/shop/ipad.png",
    "enabledUs":true,
    "enabledEu":true,
    "enabledIn":true,
    "enabledXx":true,
    "enabledCa":true,
    "priceUs":2090,
    "priceGlobal":2090,
    "fulfilledAtEnd":true,
    "comingSoon":false,
    "outOfStock":false,
    "minimumHoursEstimated":7749999999999999,
    "maximumHoursEstimated":387.49999999999994
}
```
## Built With

* ![Static Badge](https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&labelColor=white)

* ![Static Badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=%231572B6&labelColor=white)

* ![Static Badge](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E&labelColor=white)

* ![Static Badge](https://img.shields.io/badge/express-%23000000?style=for-the-badge&logo=express&logoColor=black&labelColor=white)

## Live demo

A working demo of this API is avalible under this url: <a href=""></a>
<hr/>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/HubertKr4jnik/high-seas-shop-api?style=for-the-badge
[stars-url]: https://github.com/HubertKr4jnik/high-seas-shop-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/HubertKr4jnik/high-seas-shop-api?style=for-the-badge
[issues-url]: https://github.com/HubertKr4jnik/high-seas-shop-api/issues
[license-shield]: https://img.shields.io/github/license/HubertKr4jnik/high-seas-shop-api?style=for-the-badge
[license-url]: https://img.shields.io/github/HubertKr4jnik/high-seas-shop-api/LICENSE.txt