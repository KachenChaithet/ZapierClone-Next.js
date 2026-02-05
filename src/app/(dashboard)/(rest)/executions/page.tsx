import { requireAuth } from "@/lib/auth-utils"

const page = async () => {

    await requireAuth()
    return (
        <div>this is executions</div>
    )
}
export default page