import * as React from "react";
import { View, Image, Dimensions, TextInput } from "react-native";
import Androw from "react-native-androw";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container, _textInputStyle } from "./RNInputBar.style";

const { width: ScreenWidth } = Dimensions.get("window");

export interface ISource {
  source: string | { uri: string };
}

export interface IRNInputBarProps {
  width?: number;
  height?: number | null;
  value?: string | number;
  borderRadius?: number;
  minHeight?: number;
  maxHeight?: number;
  textColor?: string;
  multiline?: boolean;
  shadowColor?: string;
  placeholder?: string;
  sendIconImageSource?: ISource;
  secondaryIconImageSource?: ISource;
  onChangeText?: (text: string) => void;
  textInputStyle?: any;
  backgroundColor?: string;
  ImageComponent?: any;
  spinnerType?: string;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerStyle?: any;
  spinnerVisibility?: boolean;
  disableSendIcon?: boolean;
  disableSecondaryIcon?: boolean;
  onSendPress?: () => void;
  secondaryIconOnPress?: () => void;
}

interface IState {}

class RNInputBar extends React.Component<IRNInputBarProps, IState> {
  renderBarIconContainer = () => {
    const {
      onSendPress,
      spinnerType,
      spinnerSize,
      spinnerColor,
      spinnerStyle,
      disableSendIcon,
      secondaryIconOnPress,
      disableSecondaryIcon,
      ImageComponent = Image,
      spinnerVisibility = false,
      sendIconImageSource = require("./local-assets/send.png"),
      secondaryIconImageSource = require("./local-assets/attachment.png"),
    } = this.props;

    return (
      <View style={styles.barIconContainer}>
        {!disableSecondaryIcon && (
          <RNBounceable
            {...this.props}
            style={styles.iconContainer}
            onPress={secondaryIconOnPress}
          >
            <ImageComponent
              style={styles.iconImageStyle}
              source={secondaryIconImageSource}
            />
          </RNBounceable>
        )}
        {spinnerVisibility ? (
          <Spinner
            type={spinnerType}
            size={spinnerSize}
            color={spinnerColor}
            style={spinnerStyle}
          />
        ) : (
          !disableSendIcon && (
            <RNBounceable
              {...this.props}
              style={styles.iconContainer}
              onPress={onSendPress}
            >
              <ImageComponent
                source={sendIconImageSource}
                style={styles.iconImageStyle}
              />
            </RNBounceable>
          )
        )}
      </View>
    );
  };

  render() {
    const {
      value,
      onChangeText,
      textInputStyle,
      height = 50,
      minHeight = 50,
      maxHeight = 150,
      borderRadius = 12,
      multiline = false,
      textColor = "#9da1ab",
      shadowColor = "#757575",
      backgroundColor = "#fff",
      width = ScreenWidth * 0.9,
      placeholder = "Type a message...",
    } = this.props;

    return (
      <Androw
        style={_container(
          height,
          width,
          minHeight,
          maxHeight,
          borderRadius,
          shadowColor,
          backgroundColor,
        )}
      >
        <TextInput
          value={value}
          multiline
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={
            textInputStyle ||
            _textInputStyle(height, width, minHeight, textColor, multiline)
          }
        />
        {this.renderBarIconContainer()}
      </Androw>
    );
  }
}

export default RNInputBar;
