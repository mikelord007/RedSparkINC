import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchListings(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [allListings, setAllListings] = useState([])
  const [hasMore, setHasMore] = useState(false)

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
      setAllListings(prevListings => {
        return [...new Set([...prevListings, ...res.data.listings])]
      })
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [ pageNumber ])

  return { loading, error, allListings, hasMore }
}