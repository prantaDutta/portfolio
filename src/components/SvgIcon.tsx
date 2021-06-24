interface SvgIconProps {
  classNames?: string
  d: string
}

const SvgIcon: React.FC<SvgIconProps> = ({ classNames = 'w-6 h-6', d }) => {
  return (
    <svg
      className={classNames}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={d}
      ></path>
    </svg>
  )
}

export default SvgIcon
