import React from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from './store'
import { increment } from './store/slice'

function GlobalCounter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(increment())}
    >{`app global click count is: ${count} 🚀`}</div>
  )
}

function LocalCounter() {
  const [count, setCount] = React.useState(0)

  return (
    <div
      onClick={() => setCount(c => c + 1)}
    >{`app local click count is: ${count} 👍`}</div>
  )
}

async function fetchJson(url, init = {}) {
  const res = await fetch(url, { ...init })

  if (!res.ok) {
    throw res
  }

  return res.json()
}

function RemoteData() {
  const [data, setData] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState()

  React.useEffect(() => {
    fetchJson('http://localhost:3000/test')
      .then(res => setData(res))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>...loading</div>
  }

  if (error) {
    return <div>{`Error: ${error.message} 🙈`}</div>
  }

  return <div>{`${data.message} 🤘`}</div>
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center h-screen">
        <GlobalCounter />
        <LocalCounter />
        <RemoteData />
      </div>
    </Provider>
  )
}