import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return  <div className="w-full h-full grid grid-cols-4 gap-4">
      {[...Array(12).keys()].map((i) => (
        <Skeleton key={i} className="h-[200px] rounded-xl"/>
      ))}
    </div>
}
