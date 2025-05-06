import React from 'react'

const Adminlayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]'>
      <AdminSidebar />
      <main className='flex-1 overflow-y-auto p-4 md:p-6'>
        {children}
      </main>
    </div>
  )
}

export default Adminlayout