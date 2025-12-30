import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Render a rotating loader icon for indicating a loading state.
 *
 * @param className - Additional CSS classes appended to the base size and animation classes
 * @param props - Remaining SVG props forwarded to the underlying icon
 * @returns A SVG element representing a spinning loader
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }