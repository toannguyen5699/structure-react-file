import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer, Logo, Menu, Nav } from './SideNav.styles'
import { PATH } from 'src/constants/paths'
import home from 'src/assets/images/home.svg'
import list from 'src/assets/images/list.svg'
import { connect } from 'react-redux'

interface ReduxProps {
  closeSideNav: boolean
}
interface Props extends ReduxProps {}

function SideNav(props: Props) {
  const { closeSideNav } = props
  return (
    <Nav className={closeSideNav ? 'close' : ''}>
      <h1>
        <Logo
          href="Toan Nguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          X
        </Logo>
      </h1>
      <Menu className="list-unstyled mb-5">
        <li>
          <NavLink exact to={PATH.HOME}>
            <img src={home} alt="" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.PRODUCT}>
            <img src={list} alt="" />
            <span>Product</span>
          </NavLink>
        </li>
      </Menu>
      <Footer>
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | This
          template is made with by
          <a
            href="https://www.facebook.com/profile.php?id=100008444040671"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white"
          >
            Toan Nguyen
          </a>
        </p>
      </Footer>
    </Nav>
  )
}

const mapStateToProps = state => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
