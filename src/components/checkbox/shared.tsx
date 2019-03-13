import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Label from './label';
import Icon from './icon';
import { Wrapper } from './styles';
// import { Hoverable } from '../Hoverable';

type Props = {
  label?: React.ReactNode;
  hasError?: boolean;
  disabled?: boolean;
  checked?: boolean;
  info?: React.ReactNode;
  onPress?: () => void;
  children?: React.ReactNode;
};

// @TODO - hover, focus states
// type State = {
//   focusDisplayed: boolean;
//   hovered: boolean;
//   pressed: boolean;
// };

const Shared = ({ label, hasError, disabled, checked, info, onPress, children }: Props) => {
  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      onPress={onPress}
      // onPressIn={this.handleOnPressIn}
      // onPressOut={this.handleOnPressOut}
      // onFocus={this.handleOnFocus}
      // onBlur={this.handleOnBlur}
      disabled={disabled}
    >
      <Wrapper disabled={disabled}>
        <Icon
          checked={checked}
          hasError={hasError}
          disabled={disabled}
          // focused={focusDisplayed}
          // hovered={hovered}
          // pressed={pressed}
        />
        {children || <Label label={label} checked={checked} info={info} />}
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default Shared;
