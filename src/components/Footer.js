import React from 'react'
// import styled from 'styled-components'
import SocialIcons from './SocialIcons'

// const Container = styled.footer`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem 0.5rem;
// `

// const Footer = () => {
//   // https://www.materialui.co/
//   // http://www.colorhexa.com/
//   const colors = {
//     color: `rgba(44, 62, 80, 0.8)`,
//     // hoverColor: `rgba(52, 152, 219, 1)`
//   }
//   return (
//     <Container>
//       <SocialIcons flexDirection="row" width="240px" {...colors} />
//     </Container>
//   )
// }

const Footer = () => {
  // https://www.materialui.co/
  // http://www.colorhexa.com/
  const colors = {
    color: `rgba(44, 62, 80, 0.8)`,
    // hoverColor: `rgba(52, 152, 219, 1)`
  }
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0.5rem',
      }}
    >
      <SocialIcons flexDirection="row" width="240px" {...colors} />
    </footer>
  )
}

export default Footer
