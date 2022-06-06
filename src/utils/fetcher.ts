export interface APIResult {
  holiday_date: string
  holiday_name: string
  is_national_holiday: boolean
}

export const getHolidays = async (query = '') => {
  return (await (await fetch(`https://api-harilibur.vercel.app/api${query}`)).json()) as APIResult[]
}
