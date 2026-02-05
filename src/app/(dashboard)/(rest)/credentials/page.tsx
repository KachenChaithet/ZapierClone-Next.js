import { requireAuth } from "@/lib/auth-utils"

const page = async () => {
    await requireAuth()

    return (
        <div>this is workflow credentials</div>
    )
}
export default page