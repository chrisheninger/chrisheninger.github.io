import React, { Component } from 'react';
import { connect } from 'react-fela';
import chroma from 'chroma-js';
import Logo from './Logo';

class App extends Component {
  render() {
    const { styles } = this.props;
    console.log(styles);
    return (
      <div className={styles.root}>
        <div className={styles.cube}>
          <div className={styles.logo}>
            <Logo width={280} height={280} />
          </div>
        </div>
        <div className={styles.body}>
          <a
            href="https://twitter.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="./resume">Resume</a>
        </div>
        <div className="archives">
          <span>Archive –</span>
          <a href="./archive/2013">[ 2013 ]</a>
          <a href="./archive/2014">[ 2014 ]</a>
        </div>
      </div>
    );
  }
}

export default connect({
  root: props => ({}),
  cube: props => ({
    background: props.theme.colors.red,
    padding: '4px',
  }),
  logo: props => ({
    filter: `drop-shadow(2px 1.5px 0 ${chroma(props.theme.colors.red)
      .darken(1.75)
      .hex()})`,
  }),
  body: props => ({
    padding: '20px',
    flex: 2,
  }),
})(App);
