import { CSS } from '@stitches/react'

import { toDateDay, toDateNumber } from 'src/utils/date-formatter'
import { Card, CardBody, CardSider, DateDay, DateNumber } from './card-style'

interface CardProps {
  css?: CSS
  holidayDate: string
  holidayName: string
}

const CardPreview = (props: CardProps) => {
  const { css, holidayDate, holidayName } = props

  return (
    <Card key={holidayDate} css={css}>
      <CardSider>
        <DateDay>{toDateDay(holidayDate)}</DateDay>
        <DateNumber>{toDateNumber(holidayDate)}</DateNumber>
      </CardSider>
      <CardBody>{holidayName}</CardBody>
    </Card>
  )
}

export default CardPreview
