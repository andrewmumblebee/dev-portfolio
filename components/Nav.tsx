export default function Nav() {
  return (
    <nav className="container mt-16">
      <ul className="flex gap-x-5">
        <li>
          <a href="/" className="font-display leading-[50%] text-2xl">
            devignator
            <br />
            drew
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-lime">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#fun" className="text-lime">
            Fun things
          </a>
        </li>
        <li>
          <a href="#about" className="text-lime">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lime">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
