import { useEffect } from "react"

function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  
  return(
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard