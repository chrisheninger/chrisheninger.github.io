import React, { Component } from 'react';
import { connect } from 'react-fela';
import Logo from './Logo';
import GitHub from './GitHub';
import Twitter from './Twitter';

class App extends Component {
  render() {
    const { styles } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.logo}>
          <Logo width={320} height={320} />
        </div>
        <div className={styles.position}>Front-end Developer</div>
        <div className={styles.body}>
          <a
            className={styles.link}
            href="https://github.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub width={32} height={32} />
          </a>
          <a
            className={styles.link}
            href="https://twitter.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter width={32} height={32} />
          </a>
        </div>
        <div className={styles.archive}>
          <a className={styles.link} href="./archive/2013">
            [ 2013 ]
          </a>
          <a className={styles.link} href="./archive/2014">
            [ 2014 ]
          </a>
          <a className={styles.link} href="./resume">
            [ Resume ]
          </a>
        </div>
      </div>
    );
  }
}

export default connect({
  root: props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logo: props => ({
    filter: `drop-shadow(1.5px 1px 0 #000)`,
  }),
  position: props => ({
    display: 'flex',
    fontSize: '18px',
    color: '#fff',
    filter: `drop-shadow(1.5px 1px 0 #000)`,
    margin: '0 4px 8px 4px',
  }),
  body: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  link: props => ({
    display: 'flex',
    color: '#fff',
    fill: '#fff',
    filter: `drop-shadow(1.5px 1px 0 #000)`,
    textDecoration: 'none',
    padding: '16px',
    margin: '8px 4px',
  }),
  archive: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '24px',
  }),
})(App);
