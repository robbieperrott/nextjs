import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function NoUserIdFoundAlert() {
    return <Alert className="size-fit" variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>No user ID found</AlertTitle>
      </Alert>
}