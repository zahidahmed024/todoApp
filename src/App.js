import React from 'react'
import { Provider, } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StartUpPage } from './pages'
import { persistor, store } from './store'
export default function App() {
  // const user = useSelector((state) => state.auth.loggedInUser);
  // let isloggedIn = user && user.token;
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <StartUpPage />
      </PersistGate>
    </Provider>
  )
}

// comment add for testing 