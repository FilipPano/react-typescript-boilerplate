import React from 'react';
import * as ThemeUI from 'theme-ui';

type ImageProps = ThemeUI.ImageProps

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <ThemeUI.Image {...props} />
  );
};
