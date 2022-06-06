import { APIResult } from './fetcher'

interface Data {
  upcomings: APIResult[]
  nextMonths: APIResult[]
  previousMonths: APIResult[]
}

const dataExtractor = (apiResult: APIResult[]) => {
  const data: Data = {
    upcomings: [],
    nextMonths: [],
    previousMonths: []
  }

  const thisMonth = new Date().getMonth() + 1
  apiResult?.filter(res => {
    const formattedHolidayMonth = new Date(res.holiday_date).getMonth() + 1

    if (formattedHolidayMonth === thisMonth) {
      data.upcomings.push(res)
    } else if (formattedHolidayMonth > thisMonth) {
      data.nextMonths.push(res)
    } else {
      data.previousMonths.push(res)
    }
  })

  return data
}

export default dataExtractor
