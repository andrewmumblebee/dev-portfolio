'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gunmetal">
      {/* Animated gradient orbs - very subtle */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald opacity-[0.08] blur-[150px] animate-float-slow"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-emerald opacity-[0.06] blur-[160px] animate-float-slower"></div>
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full bg-emerald opacity-[0.08] blur-[155px] animate-float-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald opacity-[0.05] blur-[140px] animate-float-fast"></div>

      {/* Very subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gunmetal/10 to-gunmetal/30"></div>
    </div>
  )
}
