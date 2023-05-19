import github from '@/public/github.svg'
import linkedin from '@/public/linkedin.svg'
import mail from '@/public/mail.svg'
import codepen from '@/public/codepen.svg'
import Image from 'next/image'

const links = [
  {
    href: 'mailto:andrewceharris@gmail.com',
    label: 'andrewceharris@gmail.com',
    icon: mail,
  },
  {
    href: 'https://linkedin.com/in/andrew-harris-a0775410a',
    label: 'andrew-harris-a0775410a',
    icon: linkedin,
  },
  {
    href: 'https://github.com/andrewmumblebee',
    label: 'andrewmumblebee',
    icon: github,
  },
  {
    href: 'https://codepen.io/andrewmumblebee',
    label: 'andrewmumblebee',
    icon: codepen,
  },
]

function ContactLink({
  href,
  label,
  icon,
}: {
  label: string
  href: string
  icon: string
}) {
  return (
    <a
      href={href}
      className="block focus:text-emerald hover:text-emerald transition-colors duration-200 flex items-start"
    >
      <Image src={icon} className="inline-block mr-4" alt="" />
      {label}
    </a>
  )
}
export default function Contact() {
  return (
    <section id="contact" className="mt-24 mb-32 container">
      <h2>Contact</h2>
      <p className="max-w-prose text-xl">
        Please feel free to get in touch via email if you want a chat 😊
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.href} className="mt-6 flex">
            <ContactLink {...link} />
          </li>
        ))}
      </ul>
    </section>
  )
}
