import { RegisterForm } from "@/features/auth/components/register-form"
import { prisma } from "@/lib/db"

const page = () => {
    return (
        <div>
            <RegisterForm />
        </div>
    )
}
export default page