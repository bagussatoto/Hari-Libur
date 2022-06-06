import { styled } from 'stitches.config'
import Credits from './credit'

const Container = styled('main', {
  minHeight: '100vh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <Credits />
    </>
  )
}

export default Layout
