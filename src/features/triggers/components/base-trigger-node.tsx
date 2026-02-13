"use client";

import { type NodeProps, Position } from '@xyflow/react'
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { BaseNode, BaseNodeContent } from '@/components/react-flow/base-node'
import { BaseHandle } from '../../../components/react-flow/base-handle';
import { WorkflowNode } from '../../../components/workflow-node';
import { memo } from 'react';
import { cn } from '@/lib/utils';


interface BaseTriggerNodeProps extends NodeProps {
    Icon: LucideIcon | string;
    name: string;
    description?: string;
    children?: React.ReactNode;
    // status?: NodeStatus;
    onSettings?: () => void;
    onDoubleClick?: () => void
}

export const BaseTriggerNode = memo(
    ({ id, Icon, name, description, children, onSettings, onDoubleClick }: BaseTriggerNodeProps) => {

        // TODO: add delete method
        const handleDelete = () => {

        }

        return (
            <WorkflowNode
                name={name}
                description={description}
                onDelete={handleDelete}
                onSettings={onSettings}
            >
                {/* TODO: wrap within NodeStatusIndicator */}
                <BaseNode onDoubleClick={onDoubleClick}
                    className={""}
                >
                    <BaseNodeContent>
                        {typeof Icon === "string" ? (
                            <Image src={Icon} alt={name} width={16} height={16} />
                        ) : (
                            <Icon className='size-4 text-muted-foreground' />
                        )}
                        {children}
                        <BaseHandle
                            id="target-1"
                            type="target"
                            position={Position.Left}
                        />

                        <BaseHandle
                            id="source-1"
                            type="source"
                            position={Position.Right}
                        />
                    </BaseNodeContent>
                </BaseNode>
            </WorkflowNode>
        )
    }
)
BaseTriggerNode.displayName = "BaseTriggerNode";