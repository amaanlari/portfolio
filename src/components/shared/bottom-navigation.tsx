import * as React from "react"
import { cn } from "@/lib/utils"

const BottomNavigationContext = React.createContext<{
    value?: string
    onValueChange?: (value: string) => void
}>({})

export interface BottomNavigationProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value?: string
    onValueChange?: (value: string) => void
}

const BottomNavigation = React.forwardRef<
    HTMLDivElement,
    BottomNavigationProps
>(({ className, value, onValueChange, ...props }, ref) => {
    return (
        <BottomNavigationContext.Provider value={{ value, onValueChange }}>
            <div
                ref={ref}
                className={cn(
                    "flex h-fit items-center justify-between bg-background px-4",
                    className
                )}
                {...props}
            />
        </BottomNavigationContext.Provider>
    )
})
BottomNavigation.displayName = "BottomNavigation"

export interface BottomNavigationItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
    active?: boolean
}

const BottomNavigationItem = React.forwardRef<
    HTMLButtonElement,
    BottomNavigationItemProps
>(({ className, value, active, ...props }, ref) => {
    const context = React.useContext(BottomNavigationContext)
    const isActive = active || context.value === value

    return (
        <button
            ref={ref}
            className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2",
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60",
                className
            )}
            onClick={() => context.onValueChange?.(value)}
            {...props}
        />
    )
})
BottomNavigationItem.displayName = "BottomNavigationItem"

export type BottomNavigationIconProps = React.HTMLAttributes<HTMLDivElement>

const BottomNavigationIcon = React.forwardRef<
    HTMLDivElement,
    BottomNavigationIconProps
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("h-5 w-5", className)}
            {...props}
        />
    )
})
BottomNavigationIcon.displayName = "BottomNavigationIcon"

export type BottomNavigationLabelProps = React.HTMLAttributes<HTMLSpanElement>

const BottomNavigationLabel = React.forwardRef<
    HTMLSpanElement,
    BottomNavigationLabelProps
>(({ className, ...props }, ref) => {
    return (
        <span
            ref={ref}
            className={cn("text-xs font-medium", className)}
            {...props}
        />
    )
})
BottomNavigationLabel.displayName = "BottomNavigationLabel"

export {
    BottomNavigation,
    BottomNavigationItem,
    BottomNavigationIcon,
    BottomNavigationLabel,
}