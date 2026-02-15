import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointerIcon } from "lucide-react";
import { ManualTriggerDialog } from "./dialog";
import { NodeStatus } from "@/components/react-flow/node-status-indicator";

export const ManualTriggerNode = memo(
    (props: NodeProps) => {

        const [dialogOpen, setDialogOpen] = useState(false)

        const nodeStatus: NodeStatus = "initial";

        const handleOpenSetting = () => {
            setDialogOpen(true)
        }
        return (
            <>
                <ManualTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
                <BaseTriggerNode

                    {...props}
                    Icon={MousePointerIcon}
                    name="When clicking 'Execute workflow'"
                    status={nodeStatus}
                    onSettings={handleOpenSetting}
                    onDoubleClick={handleOpenSetting}

                />
            </>
        )
    }
)