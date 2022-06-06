import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import AllHolidays from '@components/all-holidays'
import Navigation from '@components/navigation'
import { APIResult, getHolidays } from 'src/utils/fetcher'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { year: String(new Date().getFullYear() + 1) } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = params?.year as string
  const data = await getHolidays(`?year=${year}`)

  return {
    props: { data },
    revalidate: 1000 * 60 * 60 * 24 * 30 // every 1 month
  }
}

const NextYear: NextPage<{ data: APIResult[] }> = ({ data }) => {
  return (
    <>
      <AllHolidays holidays={data} header={new Date().getFullYear() + 1} />
      <Navigation type="next" />
    </>
  )
}

export default NextYear
