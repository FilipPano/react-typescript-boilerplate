import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { RootState } from 'store/reducer';

export const useState: TypedUseSelectorHook<RootState> = useReduxSelector;
