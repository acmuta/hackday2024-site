import Navbar from '../components/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <div className="">{children}</div>
    </div>
  )
}
