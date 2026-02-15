"use client"

import { useReactFlow, type Node, type NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { GlobeIcon } from "lucide-react";
import { BaseTriggerNode } from "@/features/triggers/components/base-trigger-node";
import { NodeStatus } from "@/components/react-flow/node-status-indicator";
import { BaseExecutionNode } from "../base-execution-node";
import { type FormType, HttpRequestDialog } from "./dialog";

type HttpRequestNodeData = {
    endpoint?: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: string;
    [key: string]: unknown;
};

type HttpRequestNodeType = Node<HttpRequestNodeData>

export const HttpRequestNode = memo(
    (props: NodeProps<HttpRequestNodeType>) => {
        const { setNodes } = useReactFlow();
        const [dialogOpen, setDialogOpen] = useState(false)

        const handleSubmit = (values: FormType) => {
            setNodes((nodes) => nodes.map((node) => {
                if (node.id === props.id) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            endpoint: values.endpoint,
                            method: values.method,
                            body: values.body
                        }
                    }
                }
                return node
            }))
        }

        const handleOpenSetting = () => {
            setDialogOpen(true)
        }
        const nodeData = props.data;
        const description = nodeData?.endpoint
            ? `${nodeData.method || "GET"} : ${nodeData.endpoint}`
            : "Not configured"

        const nodeStatus: NodeStatus = 'initial'
        return (
            <>
                <HttpRequestDialog
                    onOpenChange={setDialogOpen}
                    open={dialogOpen}
                    onSubmit={handleSubmit}
                    defaultEndpoint={nodeData.endpoint} // TODO: check if it can be improved by just sending initilaValues={nodeData}
                    defaultBody={nodeData.body}
                    defaultMethod={nodeData.method}
                />

                <BaseExecutionNode
                    {...props}
                    id={props.id}
                    icon={GlobeIcon}
                    name="HTTP Request"
                    status={nodeStatus}
                    description={description}
                    onSettings={handleOpenSetting}
                    onDoubleClick={handleOpenSetting}
                />
            </>
        )
    }
)