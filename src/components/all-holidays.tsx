import { toMonth } from 'src/utils/date-formatter'
import { APIResult } from 'src/utils/fetcher'
import { styled } from 'stitches.config'
import CardPreview from './shared/card'
import { GridWrapper, Month, MonthWrapper, SectionHeader } from './shared/card-style'

const NotAvailable = styled('p', {
  fontSize: 'small',
  color: '$gray11'
})

const AllHolidays = ({ holidays, header }: { holidays: APIResult[]; header: string | number }) => {
  const filteredHolidays = holidays.filter(holiday => holiday.is_national_holiday)

  const holidayResult: { [month: string]: APIResult[] } = {}

  filteredHolidays.filter(holiday => {
    const month = toMonth(holiday.holiday_date)

    // @ts-ignore
    holidayResult[month] ? holidayResult[month].push(holiday) : (holidayResult[month] = [holiday])
  })

  return (
    <GridWrapper css={{ margin: '2rem auto' }}>
      <SectionHeader>{header}</SectionHeader>
      {Object.keys(holidayResult).length === 0 && (
        <NotAvailable>
          Data hari libur belum tersedia. Kalau sudah ada nanti juga akan mengisi kekosongan ini dengan sendirinya 😉
        </NotAvailable>
      )}

      {Object.keys(holidayResult)?.map((month, index) => {
        return (
          <MonthWrapper key={month}>
            <Month>{month}</Month>
            {(Object.values(holidayResult)[index] as APIResult[])?.map(hdr => (
              <CardPreview
                key={hdr.holiday_date}
                holidayDate={hdr.holiday_date}
                holidayName={hdr.holiday_name}
                css={{ marginBottom: '.5rem' }}
              />
            ))}
          </MonthWrapper>
        )
      })}
    </GridWrapper>
  )
}

export default AllHolidays
