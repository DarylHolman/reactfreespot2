import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div>
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      Home
    </IndexLink>
    <Link to='/trips' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}> Explore
    </Link>
    <a href='https://darylholman.github.io/freespot/#support' className={css(styles.link)} target='_blank'>Support</a>
    <a href='https://medium.com/@jhabdas' className={css(styles.link)} target='_blank'>Account</a>
  </div>
)

const styles = StyleSheet.create({
  link: {
    maxWidth: 1400,
    color: '#dd4b39',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    }
  },
  activeLink: {
    color: '#'
  }
})

export default Nav
