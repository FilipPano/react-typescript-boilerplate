export const breakpoints = ['640px', '768px', '1024px', '1240px'];

export const breakpointsToArrayIndex: Record<keyof Breakpoints, number> = {
  _: 0, // 0px
  sm: 1, // 640px
  md: 2, // 768px
  lg: 3, // 1024px
  xl: 4, // 1240px
};

export interface Breakpoints {
  _?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
}
