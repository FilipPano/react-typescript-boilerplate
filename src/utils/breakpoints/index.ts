import { Breakpoints, breakpointsToArrayIndex } from 'theming/foundations/breakpoints';
import * as _ from 'lodash-es';

export function breakpoints(breakpoints: Breakpoints): any[] {
  return _.map(
    breakpointsToArrayIndex,
    (breakpointArrIndex, breakpointKey: keyof Breakpoints) => breakpoints[breakpointKey],
  );
}
