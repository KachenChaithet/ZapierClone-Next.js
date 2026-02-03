
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"
import Logout from "./Logout"



const page = async () => {
  await requireAuth()
  const data = await caller.getUsers()

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      {JSON.stringify(data)}
      <Logout />
    </div>
  )
}
export default page