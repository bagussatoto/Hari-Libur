import { styled } from 'stitches.config'

export const GridWrapper = styled('section', {
  display: 'grid',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  maxWidth: '32rem', // screen lg
  margin: '0 auto',
  width: '100%',
  gap: '.5rem',
  backgroundColor: '$gray2',
  padding: '1rem',
  borderRadius: '3px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
})

export const Card = styled('div', {
  width: '100%',
  display: 'flex',
  backgroundColor: '$gray3',
  borderRadius: '4px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
})

export const CardBody = styled('div', {
  padding: '.5rem',
  display: 'flex',
  alignItems: 'center',
  fontSize: 'large'
})

export const DateDay = styled('p', {
  fontSize: 'small'
})

export const DateNumber = styled('span', {
  fontSize: 'large',
  '@md': {
    fontSize: 'xx-large'
  },
  fontWeight: 'bold'
})

export const CardSider = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '.3rem',
  width: '15%'
})

export const SectionHeader = styled('h2', {
  fontSize: 'x-large',
  margin: '1rem 0',
  fontWeight: 'bold'
})

export const Month = styled('h3', {
  margin: '.5rem 0',
  fontSize: 'large'
})

export const MonthWrapper = styled('div', {
  marginBottom: '1.3rem'
})
