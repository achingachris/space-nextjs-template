import React from 'react'

const Header = ({ page, path }) => {
  return (
    <>
      <h1 class='mt-4'>{page}</h1>
      <ol class='breadcrumb mb-4'>
        <li class='breadcrumb-item active'>{path}</li>
      </ol>
    </>
  )
}

export default Header
