import { PAGINATION } from "@/config/constants"
import { parseAsInteger, parseAsString } from "nuqs/server"

export const workflowsParams = {
    page: parseAsInteger
        .withDefault(PAGINATION.DEFAULT_PAEG)
        .withOptions({ clearOnDefault: true }),
    pageSize: parseAsInteger
        .withDefault(PAGINATION.DEFAULT_PAEG_SIZE)
        .withOptions({ clearOnDefault: true }),
    search: parseAsString
        .withDefault("")
        .withOptions({ clearOnDefault: true })
}
