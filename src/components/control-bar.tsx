import { today } from 'src/utils/date-formatter'
import { styled } from 'stitches.config'

const Container = styled('div', {
  maxWidth: '36rem', // xl
  width: '100%',
  margin: '0 auto',
  padding: '.75rem',
  marginBottom: '2rem'
})

const Title = styled('h1', {
  fontWeight: 'bold',
  fontSize: 'xx-large',
  textTransform: 'capitalize',
  marginBottom: '10px'
})

const Divider = styled('div', {
  width: '100%',
  height: '2px',
  backgroundColor: '$gray6'
})

const Today = styled('p', {
  marginTop: '5px',
  color: '$gray11'
})

const ControlBar = () => {
  return (
    <Container>
      <Title>Daftar hari libur nasional 🇮🇩</Title>
      <Divider />
      <Today>Hari ini: {today()}</Today>
    </Container>
  )
}

export default ControlBar
