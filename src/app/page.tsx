import { Button } from "@/components/ui/button"
import ClientComponent from "./client";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return (
    <div>
      <Button>Click me</Button>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>loading...</div>}>

          <ClientComponent />
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}
export default page