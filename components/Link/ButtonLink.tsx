import { clsx } from 'clsx'
interface Props {
  text: string
  url: string
  style?: 'primary' | 'secundary'
}

export function ButtonLink ({ text, url, style = 'primary' }: Props) {
  return (
    <a href={url} target='_blank' rel='noreferrer'
      className={clsx(
        'w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2 shadow-md rounded-lg text-center font-semibold transition-all duration-300 touch-manipulation min-h-[44px] flex items-center justify-center',
        {
          'bg-primary hover:bg-primary-light text-white': style === 'primary',
          'bg-white border border-primary hover:border-primary-light text-primary hover:text-primary-light': style === 'secundary'
        }
      )}
    >
      <span className="text-sm sm:text-base">{text}</span>
    </a>
  )
}
