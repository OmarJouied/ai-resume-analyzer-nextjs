"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Renders a styled horizontal or vertical separator line.
 *
 * @param className - Additional CSS classes to apply to the separator container
 * @param orientation - Layout orientation of the separator; either `"horizontal"` or `"vertical"`
 * @param decorative - When `true`, marks the separator as decorative for assistive technologies
 * @param props - Additional props forwarded to the underlying Radix `SeparatorRoot`
 * @returns A React element representing the separator
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }