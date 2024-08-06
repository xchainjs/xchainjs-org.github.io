import {
  AsgardexIcon,
  DiscordIcon,
  FlaskIcon,
  GithubIcon,
  HeartIcon,
  Invader1Icon,
  Invader2Icon,
  Invader3Icon,
  Invader4Icon,
  JellyfishIcon,
  LeapWalletIcon,
  LendsIcon,
  LockIcon,
  SunIcon,
  SwapperIcon,
  XIcon,
  TelegramIcon,
  CacaoSwapIcon,
  LeoDexIcon,
  ThorchainIcon,
  MayachainIcon
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
  INVADER3,
  INVADER4,
  JELLYFISH,
  LEAP_WALLET,
  LENDS,
  LOCK,
  SUN,
  SWAPPER,
  TELEGRAM,
  UFO,
  X,
  CACAOSWAP,
  LEODEX,
  THORCHAIN,
  MAYACHAIN
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
  if (iconClass === IconClass.INVADER3) return <Invader3Icon className={className}></Invader3Icon>
  if (iconClass === IconClass.INVADER4) return <Invader4Icon className={className}></Invader4Icon>
  if (iconClass === IconClass.JELLYFISH) return <JellyfishIcon className={className}></JellyfishIcon>
  if (iconClass === IconClass.LENDS) return <LendsIcon className={className}></LendsIcon>
  if (iconClass === IconClass.LEAP_WALLET) return <LeapWalletIcon className={className}></LeapWalletIcon>
  if (iconClass === IconClass.LOCK) return <LockIcon className={className}></LockIcon>
  if (iconClass === IconClass.SUN) return <SunIcon className={className}></SunIcon>
  if (iconClass === IconClass.SWAPPER) return <SwapperIcon className={className}></SwapperIcon>
  if (iconClass === IconClass.TELEGRAM) return <TelegramIcon className={className}></TelegramIcon>
  if (iconClass === IconClass.UFO) return <UfoIcon className={className}></UfoIcon>
  if (iconClass === IconClass.X) return <XIcon className={className}></XIcon>
  if (iconClass === IconClass.CACAOSWAP) return <CacaoSwapIcon className={className}></CacaoSwapIcon>
  if (iconClass === IconClass.LEODEX) return <LeoDexIcon className={className}></LeoDexIcon>
  if (iconClass === IconClass.THORCHAIN) return <ThorchainIcon className={className}></ThorchainIcon>
  if (iconClass === IconClass.MAYACHAIN) return <MayachainIcon className={className}></MayachainIcon>
  return <></>
}
