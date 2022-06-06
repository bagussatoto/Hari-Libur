import Link from 'next/link'

import { styled } from 'stitches.config'

const Wrapper = styled('div', {
  maxWidth: '32rem',
  width: '100%',
  margin: '0 auto 2rem',
  display: 'flex',
  justifyContent: 'flex-end'
})

const Button = styled('a', {
  padding: '.5rem 1rem',
  borderRadius: 2,
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid $gray6',
  '&:hover': {
    backgroundColor: '$gray4'
  }
})

const IconSvg = styled('svg', {
  width: '1rem',
  height: '1rem'
})

const ArrowRight = () => (
  <IconSvg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </IconSvg>
)

const ArrowLeft = () => (
  <IconSvg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </IconSvg>
)

const Navigation = ({ type }: { type: 'now' | 'next' }) => {
  const ButtonSelected = () => {
    if (type === 'now') {
      return (
        <Link href={`/${new Date().getFullYear() + 1}`} passHref>
          <Button>
            <span style={{ marginRight: '.3rem' }}>Tahun {new Date().getFullYear() + 1}</span>
            <ArrowRight />
          </Button>
        </Link>
      )
    }

    return (
      <Link href="/" passHref>
        <Button>
          <ArrowLeft />
          <span style={{ marginLeft: '.3rem' }}>Tahun Sekarang</span>
        </Button>
      </Link>
    )
  }

  return (
    <Wrapper css={{ justifyContent: type === 'now' ? 'flex-end' : 'flex-start' }}>
      <ButtonSelected />
    </Wrapper>
  )
}

export default Navigation
