import React from 'react'

import { ToastContainer } from 'react-toastify'

type WrapperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="text-main-50 relative flex h-full min-h-dvh w-full flex-col bg-black">
      <ToastContainer
        limit={1}
        className="h-8"
        toastClassName="rounded-[20px]"
        bodyClassName="indent-2.5"
        position="top-center"
        pauseOnHover={false}
      />
      <main className="mx-auto w-[460px] max-w-full flex-1">{children}</main>
      <footer className="flex h-6 w-full items-center justify-center text-sm">
        <span>
          Copyright 2021{' '}
          <a href="mailto:shyuniz1111@gmail.com" className="underline">
            shyuniz
          </a>{' '}
          Authors.
        </span>
      </footer>
    </div>
  )
}

export default Wrapper
