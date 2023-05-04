export default function Page({
  params: { slug },
}: {
  params: { slug: string }
}): JSX.Element {
  return <h1>Server (base) - page {slug}</h1>
}
