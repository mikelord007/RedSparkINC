import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchListings(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [allListings, setAllListings] = useState([])
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/get-listings',
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c),
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => {
      setTotalPages(res.data.totalPages)
      setAllListings(prevListings => {
        return [...new Set([...prevListings, ...res.data.listings])]
      })
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [ pageNumber ])

  return { loading, error, allListings, totalPages }
}