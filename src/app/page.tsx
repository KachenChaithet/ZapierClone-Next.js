"use client"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"
import Logout from "./Logout"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"



const page = () => {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Job queued")
    }
  }))

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      {JSON.stringify(data, null, 2)}
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Creaet workflow
      </Button>
      <Logout />
    </div>
  )
}
export default page