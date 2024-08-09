'use client'

import { type IconClass, Icon } from '../Icon'

interface Props {
  title: string
  iconClass?: IconClass
  children: JSX.Element
  titleClasses?: string
  wrapperStyle?: object
}

export function Card ({
  title,
  iconClass,
  children,
  titleClasses = '',
  wrapperStyle = {}
}: Props) {
  const handleClick = () => {
    (window as any).$crisp.push(['do', 'chat:open'])
  }
  return (
    <div
      onClick={() => { handleClick() }}
      className="flex flex-col pl-4 pt-2 pb-3 pr-1 md:pr-5 text-base border-2 border-primary shadow-xl bg-white cursor-pointer"
      style={wrapperStyle}
    >
      <header className="flex flex-row pb-1 mb-1 md:mb-3 items-center">
        {iconClass && <Icon iconClass={iconClass} className="mr-2 w-6 h-6" />}
        <p className={`font-bold ${titleClasses}`}>{title}</p>
      </header>
      <div className="flex flex-row text-sm">
        {iconClass && <div className="min-w-[25px] mr-2" />}
        {children}
      </div>
    </div>
  )
}
