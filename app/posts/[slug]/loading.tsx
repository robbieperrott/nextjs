import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-lg" />
      <Skeleton className="h-40 w-lg rounded-xl" />
    </div>
  )
}
