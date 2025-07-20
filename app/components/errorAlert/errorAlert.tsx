import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function ErrorAlert(params: {message: string}) {
    return <Alert className="size-fit" variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{params.message}</AlertTitle>
      </Alert>
}