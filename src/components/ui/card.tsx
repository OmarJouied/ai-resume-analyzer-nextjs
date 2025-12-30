import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card container that provides the base layout and visual styling for a card UI.
 *
 * @returns A div element with data-slot="card" and merged utility classes for card background, spacing, border, rounded corners, and shadow
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the header section of a Card with responsive grid layout, gap, and container-aware padding.
 *
 * @param className - Additional CSS classes to merge with the component's base classes
 * @param props - Other div attributes forwarded to the underlying element
 * @returns A `div` element with `data-slot="card-header"` configured for header layout and spacing
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card title container with title-specific typography.
 *
 * @returns A div element with `data-slot="card-title"` that applies `leading-none` and `font-semibold`; forwards remaining props and merges `className`.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders a container for a card description styled with muted foreground color and small text.
 *
 * @param className - Additional CSS classes merged with the component's default styles.
 * @returns A div element with `data-slot="card-description"` that applies muted, small text styling and forwards remaining props.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders a positioned slot for actions inside a Card header.
 *
 * @returns A div element with `data-slot="card-action"` used to position header actions.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a container element used for the card's main content.
 *
 * @returns A `div` element that serves as the `card-content` slot with horizontal padding and merged `className`.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Renders a card footer container with centered items and standard padding.
 *
 * Provides a flex layout that vertically centers children, applies horizontal padding,
 * and adds top padding when a top border is present.
 *
 * @returns A `div` element serving as the card footer slot
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}