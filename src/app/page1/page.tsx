import { getUserSession } from "@/lib/services/authservice"
import { redirect } from "next/navigation"
export default function page() {
  const session = getUserSession()

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }
    return (
      <div>
        <h1>Hi, Welcome to page1 </h1>
      </div>
    )
  }
  


