import Image from 'next/image'
import avatar from './avatar.svg'

export default function Header() {
  return (
    <header className="mt-10">
      <div className="flex items-center gap-3">
        <Image src={avatar} className="w-96" alt="avatar" />
        <div className="lg:ml-11">
          <h1 className="text-2xl font-bold text-emerald -rotate-6 origin-bottom-left">
            Hello 👋 i&apos;m Andrew
          </h1>
          <h2 className="text-6xl mt-2">
            I&apos;m a <span className="highlight">web developer</span> that
            likes to make fun & creative experiences.
          </h2>
        </div>
      </div>
    </header>
  )
}
