"use client"

import { useReactFlow, type Node, type NodeProps } from "@xyflow/react";
import { memo } from "react";
import { GlobeIcon } from "lucide-react";
import { BaseTriggerNode } from "@/features/triggers/components/base-trigger-node";
import { NodeStatus } from "@/components/react-flow/node-status-indicator";
import { BaseExecutionNode } from "../base-execution-node";

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
        const nodeData = props.data;
        const description = nodeData?.endpoint
            ? `${nodeData.method || "GET"} : ${nodeData.endpoint}`
            : "Not configured"

        const nodeStatus: NodeStatus = 'loading'
        return (
            <>
                <BaseExecutionNode
                    {...props}
                    id={props.id}
                    icon={GlobeIcon}
                    name="HTTP Request"
                    status={nodeStatus}
                    description={description}
                    onSettings={() => { }}
                    onDoubleClick={() => { }}
                />
            </>
        )
    }
)