import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { rootReducer } from 'store/reducer';

type RootState = ReturnType<typeof rootReducer>

export const useState: TypedUseSelectorHook<RootState> = useReduxSelector;
