interface LogoProps {
  className?: string
  size?: number
}

import Image from "next/image"

export default function Logo({ className = "", size = 32 }: LogoProps) {
  const dimension = size ?? 32

  return (
    <Image
      src="/lexa-logo.png"
      alt="Lexa logo"
      width={dimension}
      height={dimension}
      className={className}
      priority
    />
  )
}
