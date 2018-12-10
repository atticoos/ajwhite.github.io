import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
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
    </Helmet>
    {above}
    <div style={{position: 'relative'}}>
      <Header siteTitle="Atticus White" />
      <div>
        {children}
        <div>footer</div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
