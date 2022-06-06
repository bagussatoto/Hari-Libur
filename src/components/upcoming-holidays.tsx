import { isAfterEvent } from 'src/utils/date-formatter'
import { APIResult } from 'src/utils/fetcher'
import CardPreview from './shared/card'
import { Card, CardBody, GridWrapper, SectionHeader } from './shared/card-style'

const UpcomingHolidays: React.FC<{ upcomings: APIResult[] }> = ({ upcomings }) => {
  const filteredHolidays = upcomings?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper>
      <SectionHeader>Bulan Ini</SectionHeader>
      {filteredHolidays.length === 0 && (
        <Card>
          <CardBody css={{ color: '$gray11', width: '100%' }}>Tidak ada</CardBody>
        </Card>
      )}
      {filteredHolidays?.map(holiday => (
        <CardPreview
          key={holiday.holiday_date}
          holidayDate={holiday.holiday_date}
          holidayName={holiday.holiday_name}
          css={{ color: isAfterEvent(holiday.holiday_date) ? '$gray11' : '$gray12' }}
        />
      ))}
    </GridWrapper>
  )
}

export default UpcomingHolidays
