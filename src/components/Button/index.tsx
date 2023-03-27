import React, {FC} from 'react';
import {Theme} from '@/theme';
import {BoxProps, createBox} from '@shopify/restyle';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';
import Text from '../Text';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

interface ButtonProps extends TouchableOpacityProps, BoxProps<Theme> {
  title: string;
}

const Button: FC<ButtonProps> = ({title, ...rest}) => {
  console.log(title);
  return (
    <BaseButton
      {...rest}
      activeOpacity={0.7}
      borderRadius={4}
      elevation={4}
      justifyContent="center"
      alignItems="center"
      paddingVertical="m"
      width="100%"
      borderWidth={1}
      backgroundColor="background">
      <Text>{title}</Text>
    </BaseButton>
  );
};

export default Button;
