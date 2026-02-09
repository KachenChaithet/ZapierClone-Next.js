"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { authClient } from "@/lib/auth-client";

interface UpgradeModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;

}

const UpgradeModal = ({ open, onOpenChange }: UpgradeModalProps) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
                    <AlertDialogDescription>
                        You need an active subscription to perform this action. Upgrade to Pro to unlock all features.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogCancel >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => authClient.checkout({ slug: "pro" })}
                        >
                            Upgrade Now
                        </AlertDialogAction>

                    </AlertDialogFooter>
                </AlertDialogHeader>
            </AlertDialogContent>

        </AlertDialog>
    )
}
export default UpgradeModal