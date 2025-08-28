import footerHtml from './footer.html?raw'

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
}
