import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className={css(styles.root)}>
      <Helmet title='FreeSpot' titleTemplate='%s - Explore' />
      <h1 className={css(styles.title)}>FreeSpot</h1>
      <h2 className={css(styles.subtitle)}>Let's Get Free!</h2>
      <Nav />
      {children}
      <footer className={css(styles.footer)}>
        © 2016 FreeSpot. All Rights Reserved.

 <a className={css(styles.footerLink)} href='https://darylholman.github.io/freespot/faq.html' target='_blank'>FAQ</a>
 <a className={css(styles.footerLink)} href='https://darylholman.github.io/freespot/faq.html' target='_blank'>Privacy</a>
 <a className={css(styles.footerLink)} href='https://darylholman.github.io/freespot/faq.html' target='_blank'>Terms</a>
      </footer>
    </div>
  </MuiThemeProvider>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56,
    fontFamily: 'Roboto',
  },
  subtitle: {
    color: '#999',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'Roboto'
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#000',
    fontFamily: 'Roboto',
    padding: '0',
    position:'fixed',
    height: '142',
    margin:'1700'
  },
  footerLink: {
    display: 'inline-block',
    color: '#dd4b39',
    textDecoration: 'none',
    fontFamily: 'Roboto'
  }
})

export default App
