import { h } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'pre-bp-router'

import BirdHeading from '../components/BirdHeading'
import LibraryList from '../components/LibraryList'
import BackToMainLink from '../components/BackToMainLink'

function LibrariesPage ({ libraries }) {
  return (
    <div>
      <BirdHeading />
      <h3>warbler pre-release</h3>
      <h3>
        started with
        <a href='https://github.com/pre-bp/pre-bp'>pre-bp</a>
        v0.4.3, tiny frontend boilerplate
      </h3>
      <p>JavaScript depedencies in production:</p>
      <LibraryList libraries={ libraries } />
      <BackToMainLink />
    </div>
  )
}

function mapStateToProps(state) {
  const libraries = state.libraries
  return {
    libraries
  }
}

export default connect(mapStateToProps)(LibrariesPage)
