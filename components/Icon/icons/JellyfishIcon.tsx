interface Props {
  className?: string
}

export function JellyfishIcon ({ className }: Props) {
  return (
    <svg className={className} width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'>
      <path fill='currentcolor' d='M10 8V6H6V8H10ZM14 12V10H10V12H14ZM18 8V6H14V8H18ZM22 4H24V10H18V12H20V14H18V16H16V14H18V12H14V14H10V12H6V14H8V16H6V14H4V12H6V10H0V4H2V2H8V-2.38419e-07H16V2H22V4Z'/>
    </svg>
  )
}
