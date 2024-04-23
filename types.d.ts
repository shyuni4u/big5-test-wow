declare module '*.svg' {
  import React from 'react'
  const svg: React.FC<React.SVGProps<SVGElement>>
  export default svg
}
