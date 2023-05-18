function ContactLink({
  href,
  label,
  icon,
}: {
  label: string
  href: string
  icon?: string
}) {
  return (
    <a href={href} className="block mt-1">
      {label}
    </a>
  )
}
export default function Contact() {
  return (
    <section id="contact" className="mt-24">
      <h2>Contact</h2>
      <p>Please feel free to get in touch via email if you want a chat 😊</p>
      <ul>
        <li>
          <ContactLink
            href="mailto:andrewceharris@gmail.com"
            label="andrewceharris@gmail.com"
          />
        </li>
        <li>
          <ContactLink
            href="https://linkedin.com/in/andrew-harris-a0775410a"
            label="linkedin.com/in/andrew-harris-a0775410a"
          />
        </li>
        <li>
          <ContactLink
            href="https://github.com/andrewmumblebee"
            label="github.com/andrewmumblebee"
          />
        </li>
        <li>
          <ContactLink
            href="https://codepen.io/andrewmumblebee"
            label="codepen.io/andrewmumblebee"
          />
        </li>
      </ul>
    </section>
  )
}
