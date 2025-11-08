import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Lists() {
  const [list, setList] = useState([])
  const { serverUrl } = useContext(authDataContext)

  const fetchList = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`, { withCredentials: true })
      setList(Array.isArray(result.data) ? result.data : [])
    } catch (error) {
      setList([])
    }
  }

  const removeList = async (id) => {
    try {
      const result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, { withCredentials: true })
      if (result.data) fetchList()
    } catch (error) {
      // keep silent to avoid UI crash
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="w-screen min-h-screen bg-background text-foreground">
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="w-full lg:ml-[320px] md:ml-[240px] px-4 md:px-8 pt-24 pb-16">
          <h1 className="text-3xl font-semibold mb-6">All Products</h1>

          {list.length === 0 && (
            <div className="text-muted bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              No products available.
            </div>
          )}

          <div className="grid gap-4">
            {list.map((item) => (
              <div
                key={item._id}
                className="w-full bg-card rounded-2xl p-4 md:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-4"
              >
                <img
                  src={item.image1}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover bg-background"
                  alt={item.name}
                />
                <div className="flex-1">
                  <div className="text-lg md:text-xl font-medium">{item.name}</div>
                  <div className="text-sm text-muted">{item.category}</div>
                  <div className="text-base md:text-lg mt-1">₹{item.price}</div>
                </div>
                <button
                  aria-label={`Remove ${item.name}`}
                  onClick={() => removeList(item._id)}
                  className="shrink-0 px-4 h-11 rounded-full border border-border text-foreground hover:bg-background hover:text-accent"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists
