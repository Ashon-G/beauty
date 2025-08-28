import heroHtml from './hero.html?raw'

export default function Hero() {
  return <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
}
