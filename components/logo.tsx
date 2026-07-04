import Image from 'next/image'

type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Summit Fitness — Home"
    >
      {/* Black mark inverted to white for dark backgrounds */}
      <Image
        src="/logo.png"
        alt=""
        width={48}
        height={32}
        className="h-8 w-auto invert"
        priority
        aria-hidden="true"
      />
      {showWordmark && (
        <span className="font-display text-ink text-xl uppercase tracking-tight">
          Summit Fitness
        </span>
      )}
    </a>
  )
}
