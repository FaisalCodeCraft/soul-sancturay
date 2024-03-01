import React from 'react'
import QuickSearch from '../components/QuickSearch/QuickSearch'
import AdvanceSearch from '../components/AdvancedSearch/AdvanceSearch'
import useSearchData from '../hooks/useSearchData'


const SearchContainer = () => {
  const {newUsers,user} = useSearchData({})
  return (
    <>
    <QuickSearch/>
    <AdvanceSearch/>
    </>
  )
}

export default SearchContainer