"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * Render a label element with default utility styles and forwarded props.
 *
 * The element includes a `data-slot="label"` attribute, merges any `className`
 * with the component's default classes, and respects group/peer disabled states
 * (adjusting pointer events, opacity, and cursor).
 *
 * @param className - Additional CSS class names to merge with the default styles
 * @returns A JSX element representing a styled label
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }