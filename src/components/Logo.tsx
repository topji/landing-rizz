interface LogoProps {
  className?: string
  size?: number
}

import Image from "next/image"

export default function Logo({ className = "", size = 32 }: LogoProps) {
  const dimension = size ?? 32

  return (
    <Image
      src="https://lime-overseas-impala-240.mypinata.cloud/ipfs/bafkreidb34c5fp5b326px7mb2o62jaat6mkdwlili2emhdwmu5dhluz6ya"
      alt="Lexa logo"
      width={dimension}
      height={dimension}
      className={className}
      priority
    />
  )
}
