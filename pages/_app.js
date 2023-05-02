import store from '@/public/src/app/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import NoInCartContext from './components/noInCartContext'

export default function App({ Component, pageProps }) {
  const [noInCart, setNoInCart] = useState(0)
  return( 
    <SessionProvider session={pageProps.session}>
      <NoInCartContext.Provider value={{noInCart, setNoInCart}}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NoInCartContext.Provider>
    </SessionProvider>
  )
}

