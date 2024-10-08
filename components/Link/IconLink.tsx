import { Icon, type IconClass } from '../Icon'

interface Props {
  iconClass: IconClass
  url: string
  iconHoverColor?: string
}

export function IconLink ({ iconClass, url, iconHoverColor }: Props) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Icon
        iconClass={iconClass}
        className={`text-primary hover:${
          iconHoverColor || 'text-primary-light'
        } h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24`}
      />
    </a>
  )
}
