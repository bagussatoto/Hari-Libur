import type { GetStaticProps, NextPage } from 'next'

import UpcomingHolidays from '@components/upcoming-holidays'
import dataExtractor from 'src/utils/data-extractor'
import Navigation from '@components/navigation'
import { APIResult, getHolidays } from 'src/utils/fetcher'
import AllHolidays from '@components/all-holidays'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getHolidays()

  return { props: { data } }
}

const Home: NextPage<{ data: APIResult[] }> = ({ data }) => {
  const extractedData = dataExtractor(data)

  return (
    <>
      <UpcomingHolidays upcomings={extractedData?.upcomings} />
      <AllHolidays holidays={extractedData?.nextMonths} header="Bulan Depan" />
      <Navigation type="now" />
    </>
  )
}

export default Home
