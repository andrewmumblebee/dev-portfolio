'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gunmetal">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald opacity-20 blur-[120px] animate-float-slow"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-emerald opacity-15 blur-[130px] animate-float-slower"></div>
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full bg-emerald opacity-20 blur-[140px] animate-float-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald opacity-10 blur-[110px] animate-float-fast"></div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gunmetal/30 to-gunmetal/60"></div>
    </div>
  )
}
