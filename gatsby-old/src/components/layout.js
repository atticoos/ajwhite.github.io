import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from './header'
import './layout.css'

const Layout = ({children, above}) => (
  <>
    <Helmet
      title="Atticus White - Software Engineer, Boston MA"
      meta={[
        {name: 'description', content: 'Atticus White is a Software Engineer based in Boston focusing on React.'},
        {name: 'keywords', content: 'atticus, white, software, engineer, wordpress, gatsby, react, atticus white, atticoos'}
      ]}
    >
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,600|Open+Sans:400,300,700,600" rel="stylesheet" type="text/css" />
      <style type="text/css">{`
        html,body {
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>
    </Helmet>
    {above}
    <div style={{position: 'relative'}}>
      {/* <Header siteTitle="Atticus White" /> */}
      <div>
        {children}
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
