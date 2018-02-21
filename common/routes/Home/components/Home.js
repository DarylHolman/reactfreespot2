import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import data from '../data'

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = (props) => (
  <div>

    <h2 className={css(styles.header)}>About</h2>
    <p className={css(styles.lead)}>
Our purpose is to work to cut down on waste of all kinds. For example, 52 million tons of food are sent to a landfill. Meanwhile, 1 in 7 Americans are food insecure. Looking at food as just one example, misuse of resources extends far past the food industry. By creating a platform intended to share unused resources of all kinds, we hope to cut down the amount of people living in need as well as the amount of waste in the United States.   </p>
    <h2 className={css(styles.header)}>How it Works</h2>
    <p className={css(styles.lead)}>
      Step 1:Create an Account, Step 2:Upload an Item to Share, Step 3:Scroll the Platform and Make Claims on the Items You Need!
    </p>
    <h2 className={css(styles.header)}>Under the Hood</h2>
    <ul className={css(styles.list)}>
      {data.map((item, i) => (
        <li key={i}>
          <h3><a className={css(styles.link)} href={item.link} target='_blank'>{item.resource}</a></h3>
          <p className={css(styles.body)}>{item.description}</p>
        </li>
       ))}
    </ul>
    

  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home
