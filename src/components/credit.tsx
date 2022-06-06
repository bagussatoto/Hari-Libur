import { styled } from 'stitches.config'

const Footer = styled('footer', {
  width: '100%',
  padding: '2rem',
  backgroundColor: '$gray2',
  borderTop: '1px solid $gray6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Link = styled('a', {
  borderBottom: '1px dotted',
  '&:hover': {
    color: '$gray11'
  }
})

const Credits = () => {
  return (
    <Footer>
      <Link href="https://github.com/bagussatoto/" title="Profile ❤️ Bagussatoto">
      Profile ❤️ Bagus Budi Satoto
      </Link>
      <Link href="https://github.com/bagussatoto/HariLibur.git" title="Github repository">
        Kontribusi
      </Link>
    </Footer>
  )
}

export default Credits
