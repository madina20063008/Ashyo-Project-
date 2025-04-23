"use client"
import { ArrowDownIcon, LocationIcon } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'
import { HeaderTopStyle } from './styles'

function HeaderTop() {
  return (
    <HeaderTopStyle>
      <div className="containers header-top">
        <nav>
          <Link href={"/"}>
            <LocationIcon />
            Tashkent
          </Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Contacts</Link>
        </nav>
        <div className="">
          <Link href={"tel: +998 (71) 123-45-67"}>+998 (71) 123-45-67</Link>
          <div>
            <span>Uz</span>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </HeaderTopStyle>
  )
}

export default HeaderTop