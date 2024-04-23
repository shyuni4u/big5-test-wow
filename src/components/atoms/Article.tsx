import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type customProps = {}

export type ArticleProps = React.ComponentPropsWithoutRef<'article'> & customProps

const Article = (props: ArticleProps, ref: React.Ref<HTMLElement>) => {
  const { className, children, ...rest } = props

  return (
    <article
      className={twMerge(
        className,
        'border-main-800 bg-main-950 flex w-full flex-col items-center gap-3 rounded-sm border px-6 py-3'
      )}
      {...rest}
    >
      {children}
    </article>
  )
}

export default forwardRef(Article)
