import { FC, ReactNode } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import {
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import { PersistGate } from "redux-persist/integration/react";

import authSlice from "@redux/slices/authSlice";
import commonSlice from "@redux/slices/commonSlice";

import { common_api } from "@redux/services/common-services";

const persistConfig = {
  key: "prigozhin",
  storage: localStorage,
  whitelist: ['common']
};

const reducer = combineReducers({
  auth: authSlice,
  common: commonSlice,
  common_api: common_api.reducer,
});

const rootReducer = persistReducer(persistConfig, reducer);

// STORE
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      common_api.middleware,
    ]),
});
const persistor = persistStore(store);

interface ReduxProviderProps{
    children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      {props.children}
    </Provider>
  );
};

export default ReduxProvider;