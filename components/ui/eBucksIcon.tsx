export function EBucksIcon({ 
  className = "w-6 h-6", 
  showGlow = false 
}: { 
  className?: string
  showGlow?: boolean 
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-teal-400 blur-lg opacity-50 animate-pulse" />
      )}
      <svg 
        viewBox="0 0 80 80" 
        className={`relative ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer teal circle */}
        <path 
          d="M 62.14 43.11 C 62.18 42.45 62.21 41.78 62.21 41.11 C 62.21 40.44 62.18 39.77 62.14 39.11 C 61.11 22.86 47.61 10 31.11 10 C 14.61 10 1.1 22.87 0.07 39.11 C 0.03 39.77 0 40.44 0 41.11 C 0 41.78 0.03 42.45 0.07 43.11 C 1.1 59.36 14.6 72.22 31.1 72.22 C 46.45 72.22 59.19 61.1 61.74 46.48 L 53.81 46.48 C 51.39 56.78 42.15 64.45 31.11 64.45 C 18.9 64.45 8.89 55.07 7.87 43.12 L 62.14 43.12 Z M 7.87 39.11 C 8.88 27.16 18.9 17.78 31.11 17.78 C 43.32 17.78 53.33 27.16 54.35 39.11 Z" 
          fill="#1BCEAC" 
          transform="translate(9, 4) scale(0.8)"
        />
        
        {/* Inner green 'e' centered */}
        <path 
          d="M 30.957 23.56 C 29.947 15.76 23.447 10 15.537 10 C 7.627 10 1.197 15.83 0.117 23.56 C -0.023 24.55 -0.053 26.57 0.117 27.55 C 1.497 35.57 7.627 41.11 15.537 41.11 C 22.247 41.11 27.957 36.87 30.137 30.92 L 21.157 30.92 C 19.737 32.4 17.747 33.33 15.537 33.33 C 11.937 33.33 8.907 30.88 8.027 27.55 L 30.957 27.55 C 30.957 27.55 31.197 25.4 30.957 23.56 Z M 15.537 17.78 C 19.137 17.78 22.157 20.23 23.047 23.56 L 8.027 23.56 C 8.907 20.23 11.927 17.78 15.537 17.78 Z" 
          fill="#1AC668" 
          transform="translate(21, 17) scale(0.8)"
        />
      </svg>
    </div>
  )
}

export function EBucksDisplay({ 
  amount, 
  size = "default",
  showAnimation = false 
}: { 
  amount: number
  size?: "small" | "default" | "large"
  showAnimation?: boolean
}) {
  const sizeClasses = {
    small: "text-sm",
    default: "text-base", 
    large: "text-xl"
  }
  
  const iconSizes = {
    small: "w-4 h-4",
    default: "w-5 h-5",
    large: "w-7 h-7"
  }
  
  return (
    <div className={`inline-flex items-center gap-1 ${showAnimation ? 'animate-bounce' : ''}`}>
      <EBucksIcon className={iconSizes[size]} showGlow={showAnimation} />
      <span className={`font-semibold text-gray-900 ${sizeClasses[size]}`}>
        {amount.toLocaleString()}
      </span>
    </div>
  )
}