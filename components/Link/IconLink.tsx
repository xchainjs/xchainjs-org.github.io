import { Icon, type IconClass } from '../Icon'

interface Props {
  iconClass: IconClass
  url: string
  iconHoverColor?: string
}

export function IconLink ({ iconClass, url, iconHoverColor }: Props) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer"
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      <Icon
        iconClass={iconClass}
        className={`text-primary hover:${
          iconHoverColor || 'text-primary-light'
        } h-6 w-6 sm:h-8 sm:w-8`}
      />
    </a>
  )
}
