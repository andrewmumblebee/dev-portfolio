const links = [
  {
    href: '#portfolio',
    label: 'Portfolio',
  },
  {
    href: '#fun',
    label: 'Fun things',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
]

export default function Nav() {
  return (
    <nav className="container mt-8 lg:mt-16">
      <ul className="flex gap-x-14">
        <li>
          <a
            href="/"
            className="font-display leading-[74%] text-2xl block focus:text-emerald hover:text-emerald transition-colors duration-200"
          >
            devignator
            <br />
            drew
          </a>
        </li>
        {links.map(({ href, label }) => (
          <li
            key={href}
            className="hidden last:ml-auto lg:last:ml-0 last:block lg:block"
          >
            <a
              href={href}
              className="focus:text-emerald hover:text-emerald transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
