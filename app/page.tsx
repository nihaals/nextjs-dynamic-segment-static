import Link from "next/link"

export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/about">Static page (server component)</Link>
        </li>
        <li>
          <p>Client components</p>
          <ul>
            <li>
              <Link href="/client/1">No base</Link>
            </li>
            <li>Base</li>
            <ul>
              <li>
                <Link href="/client-base">Base</Link>
              </li>
              <li>
                <Link href="/client-base/1">Path</Link>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <p>Server components</p>
          <ul>
            <li>
              <Link href="/server/1">No base</Link>
            </li>
            <li>Base</li>
            <ul>
              <li>
                <Link href="/server-base">Base</Link>
              </li>
              <li>
                <Link href="/server-base/1">Path</Link>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </>
  )
}
