import React from 'react';
import * as ThemeUI from 'theme-ui';
import { isFlexGapSupported } from 'utils/browser-support';

interface FlexProps extends ThemeUI.FlexProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems?: 'center' | 'start' | 'end',
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  justifyItems?: 'center' | 'start' | 'end',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: string | number,
}

export const Flex: React.FC<FlexProps> = ({
  sx,
  as,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  gap,
  children,
  ...props
}) => {
  let flexSx: any = {
    gap,
    flexDirection,
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    ...sx,
  };

  // Workaround for browsers that do not support flexbox gap yet
  if (!isFlexGapSupported) {
    if (flexSx.gap) {
      if (flexSx.flexDirection === 'column' || flexSx.flexDirection === 'column-reverse') {
        flexSx = {
          ...flexSx,
          '& > * + *': {
            marginTop: flexSx.gap,
          },
        };
      } else {
        flexSx = {
          ...flexSx,
          '& > * + *': {
            marginLeft: flexSx.gap,
          },
        };
      }
    } else if (flexSx.columnGap || flexSx.rowGap) { // used when flexDirection has different breakpoints
      flexSx = {
        ...flexSx,
        '& > * + *': {
          marginTop: flexSx.columnGap,
          marginLeft: flexSx.rowGap,
        },
      };
    }
  }

  return (
    <ThemeUI.Flex
      sx={flexSx}
      as={as}
      {...props}
    >
      {children}
    </ThemeUI.Flex>
  );
};
