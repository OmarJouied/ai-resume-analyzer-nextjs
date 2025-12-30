"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

/**
 * Render a fieldset container used to group related form fields.
 *
 * Renders a <fieldset> with a data-slot of "field-set" and layout classes that set vertical stacking and responsive gaps; merges any provided `className` and forwards remaining fieldset props.
 *
 * @returns The rendered fieldset element with `data-slot="field-set"` and spacing/layout classes.
 */
function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a legend element for a field with a variant-specific text size.
 *
 * @param variant - Determines visual variant: `"legend"` applies base text size, `"label"` applies smaller text size.
 * @returns A `legend` element with `data-slot="field-legend"`, `data-variant` set to the given variant, and variant-driven typography classes.
 */
function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a container div used to group related form fields.
 *
 * Merges any provided `className` with the component's grouping and responsive layout classes
 * and exposes the slot as `data-slot="field-group"`.
 *
 * @param className - Additional classes to append to the component's computed class list
 * @returns A div element with `data-slot="field-group"` that applies layout, gap, and grouping styles
 */
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:[data-slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

/**
 * Renders a field container that groups related form controls and exposes layout orientation.
 *
 * @param orientation - Layout orientation: "vertical", "horizontal", or "responsive". Controls spacing, alignment, and responsive behavior of the field group.
 * @returns A div element used as the field group container with role="group", `data-slot="field"`, `data-orientation` set to `orientation`, and classes computed from the fieldVariants and `className`.
 */
function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * Renders the container for a field's content.
 *
 * Exposes the content slot via `data-slot="field-content"` and applies layout classes for a flexible, vertical field content area; accepts and merges additional `div` props and `className`.
 *
 * @returns A `div` element used as the field content container with layout classes and `data-slot="field-content"`.
 */
function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a Label configured as the field's label slot with appropriate slot attributes and styling.
 *
 * The component sets `data-slot="field-label"`, applies layout and state-aware classes for use inside
 * the field system, and merges any provided `className` with its default classes.
 *
 * @param className - Additional CSS classes appended to the component's default classes
 * @returns A Label element prepared for use as a field label slot
 */
function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the title area used alongside a field label.
 *
 * Applies layout and typographic styles and exposes a `data-slot="field-label"` for slot-based composition.
 *
 * @returns A `div` element serving as the field title area.
 */
function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the description paragraph for a field with typography, spacing, and link styles.
 *
 * @returns A paragraph element with `data-slot="field-description"` that applies layout, spacing, and link styling; merges the provided `className` and forwards all other props.
 */
function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-data-[orientation=horizontal]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a visual separator for form fields with optional centered content.
 *
 * When `children` is provided, the separator shows the children centered above the line
 * and sets `data-content` to true; otherwise `data-content` is false and only the line is shown.
 *
 * @param children - Optional content displayed centered over the separator line.
 * @param className - Additional class names applied to the outer container.
 * @returns A div element containing the separator line and optional centered content.
 */
function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

/**
 * Renders field-level error messages for a form field.
 *
 * If `children` is provided it is used as the error content; otherwise this component deduplicates `errors` by message text and renders a single message or a bulleted list. If no content is available, nothing is rendered.
 *
 * @param children - Custom error content to render instead of using `errors`.
 * @param errors - Array of error objects; messages are deduplicated by text. One unique message is rendered directly; multiple unique messages are rendered as a bulleted list.
 * @returns A React element containing the error content when present, `null` otherwise.
 */
function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}