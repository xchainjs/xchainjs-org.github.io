import {
  AsgardexIcon,
  DiscordIcon,
  FlaskIcon,
  GithubIcon,
  HeartIcon,
  Invader1Icon,
  Invader2Icon,
  JellyfishIcon,
  LendsIcon,
  LockIcon,
  SunIcon,
  SwapperIcon,
  XIcon,
  TelegramIcon
} from './icons'
import { UfoIcon } from './icons/UfoIcon'

export enum IconClass {
  ASGARDEX,
  DISCORD,
  FLASK,
  GITHUB,
  HEART,
  INVADER1,
  INVADER2,
  JELLYFISH,
  LENDS,
  LOCK,
  SUN,
  SWAPPER,
  TELEGRAM,
  UFO,
  X
}

interface Props {
  iconClass: IconClass
  className?: string
}

export function Icon ({ iconClass, className }: Props) {
  if (iconClass === IconClass.ASGARDEX) return <AsgardexIcon className={className}></AsgardexIcon>
  if (iconClass === IconClass.DISCORD) return <DiscordIcon className={className}></DiscordIcon>
  if (iconClass === IconClass.FLASK) return <FlaskIcon className={className}></FlaskIcon>
  if (iconClass === IconClass.GITHUB) return <GithubIcon className={className}></GithubIcon>
  if (iconClass === IconClass.HEART) return <HeartIcon className={className}></HeartIcon>
  if (iconClass === IconClass.INVADER1) return <Invader1Icon className={className}></Invader1Icon>
  if (iconClass === IconClass.INVADER2) return <Invader2Icon className={className}></Invader2Icon>
  if (iconClass === IconClass.JELLYFISH) return <JellyfishIcon className={className}></JellyfishIcon>
  if (iconClass === IconClass.LENDS) return <LendsIcon className={className}></LendsIcon>
  if (iconClass === IconClass.LOCK) return <LockIcon className={className}></LockIcon>
  if (iconClass === IconClass.SUN) return <SunIcon className={className}></SunIcon>
  if (iconClass === IconClass.SWAPPER) return <SwapperIcon className={className}></SwapperIcon>
  if (iconClass === IconClass.TELEGRAM) return <TelegramIcon className={className}></TelegramIcon>
  if (iconClass === IconClass.UFO) return <UfoIcon className={className}></UfoIcon>
  if (iconClass === IconClass.X) return <XIcon className={className}></XIcon>

  return <></>
}
