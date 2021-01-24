import React, { Suspense } from 'react'
import { Link, Route } from 'wouter'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import './App.css'

const HomePage = React.lazy(() => import('./pages/Home'))
const DetailPage = React.lazy(() => import('./pages/Detail'))
const SearchResultsPage = React.lazy(() => import('./pages/SearchResults'))

function App () {
  const value = { name: 'mauricioft93', suscribeteAlCanal: true }
  return (
    <StaticContext.Provider value={value}>
      <div className="App">
        <Suspense fallback={null}>
          <section className='App-content'>
            <Link to='/'>
              <img
                src="/logo192.png"
                className='App-logo'
                alt='Giffy logo'
              />
            </Link>
            <GifsContextProvider>
              <Route
                path="/"
                component={HomePage}
              />
              <Route
                path="/search/:keyword"
                component={SearchResultsPage}
              />
              <Route
                path="/gif/:id"
                component={DetailPage}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  )
}

export default App
