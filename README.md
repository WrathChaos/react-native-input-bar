<img alt="React Native Input Bar" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-input-bar)

[![Fully customizable, beautifully designed Input Bar for React Native](https://img.shields.io/badge/-Fully%20customizable%2C%20beautifully%20designed%20Input%20Bar%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-input-bar)

[![npm version](https://img.shields.io/npm/v/react-native-input-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-input-bar)
[![npm](https://img.shields.io/npm/dt/react-native-input-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-input-bar)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Input Bar"
        src="assets/Screenshots/example.png" width="49%" />
<img alt="React Native Input Bar"
        src="assets/Screenshots/RN-Input-Bar.gif" width="49%"  />
</p>

# Installation

Add the dependency:

```ruby
npm i @freakycoder/react-native-input-bar
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react-native-spinkit": ">= 1.5.0",
"react-native-androw": ">= 0.0.34",
"@freakycoder/react-native-bounceable": "^0.2.0",
```

### Note: Do not for get to `pod install` for installing properly SpinKit

# Usage

### InputBar should stay at the bottom therefore, please do not forget to set `flex: 1` on your main container. Example is available for the real usage.

## Import

```js
import RNInputBar from "@freakycoder/react-native-input-bar";
```

## Usage

```jsx
<RNInputBar />
```

## Auto-Grow InputBar Usage

All you need to do is set the `multiline` and set the `height` prop as `null`.

```jsx
<RNInputBar multiline height={null} minHeight={50} />
```

# Configuration - Props

| Property                 |     Type      |       Default       | Description                                                                                                    |
| ------------------------ | :-----------: | :-----------------: | -------------------------------------------------------------------------------------------------------------- |
| width                    | string/number | 90% of screen width | change the InputBar's width                                                                                    |
| height                   | string/number |         50          | change the InputBar's height                                                                                   |
| bottom                   | string/number |         24          | change the InputBar's bottom position                                                                          |
| value                    |    string     |      undefined      | set the TextInput's value                                                                                      |
| onChangeText             |   function    |      undefined      | handle onChangeText function                                                                                   |
| backgroundColor          |     color     |       #fdfdfd       | set your own color for InputBar's background color                                                             |
| textColor                |     color     |       #9da1ab       | set your own color for TextInput's text color                                                                  |
| shadowColor              |     color     |       #757575       | set your own color for TextInput's shadow color                                                                |
| placeholder              |    string     |  Type a message...  | change the TextInput's placeholder                                                                             |
| textInputStyle           |     style     |       default       | set your own style for TextInput                                                                               |
| disableSendIcon          |    boolean    |        false        | disable the send icon                                                                                          |
| disableSecondaryIcon     |    boolean    |        false        | disable the secondary icon                                                                                     |
| onSendPress              |   function    |      undefined      | set a function when send icon is on pressed                                                                    |
| secondaryIconOnPress     |   function    |      undefined      | set a function when secondary icon is on pressed                                                               |
| spinnerVisibility        |    boolean    |        false        | make the spinner visible instead of primarty icon                                                              |
| spinnerType              |    string     |   FadingCircleAlt   | change the spinner type                                                                                        |
| spinnerSize              |    number     |         20          | change the spinner number                                                                                      |
| spinnerColor             |     color     |       #9da1ab       | change the spinner color                                                                                       |
| spinnerStyle             |     style     |      undefined      | set your own style for spinner                                                                                 |
| multiline                |    boolean    |        false        | if you want **auto-grow** text `RNInputBar` then you need to use this prop & set the `height` prop to `null` ! |
| minHeight                | string/number |         50          | change the minimum height of the `RNInputBar`                                                                  |
| maxHeight                | string/number |        null         | change the maximum height of the `RNInputBar`                                                                  |
| borderRadius             |    number     |         12          | change the border radius of the `RNInputBar`                                                                   |
| sendIconImageSource      |     image     |       default       | change the send icon image                                                                                     |
| secondaryIconImageSource |     image     |       default       | change the secondary icon image default is attachment                                                          |


## Roadmap

- [x] ~~LICENSE~~
- [x] ~~CHANGELOG~~
- [x] ~~Auto-Grow Feature~~
- [x] ~~TypeScript Challange~~
- [ ] Optional Spinkit for secondary icon
- [ ] Better Example

## Credits

Thanks to [Mayurksgr](https://www.instagram.com/mayurksgr/) for this awesome inspiration. [Credit Design Inpsiration](https://www.instagram.com/p/BgOxB9SlLkM/)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Input Bar is available under the MIT license. See the LICENSE file for more info.
