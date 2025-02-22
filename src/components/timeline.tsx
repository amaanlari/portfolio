/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */

import * as React from 'react';
import {cn} from '@/lib/utils';
import {Badge} from '@/components/ui/badge';
import {cva, VariantProps} from "class-variance-authority";

const timelineHeaderVariants = cva(
    "mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground",
    {
        variants: {
            variant: {
                default: "group-last:before:hidden",
                ghost: "",
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
)

const Timeline = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
    <div ref={ref} className={className} {...props} />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
    HTMLDivElement,
    React.LiHTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn('group relative pb-8 pl-8 ', className)}
        {...props}
    />
));
TimelineItem.displayName = 'TimelineItem';

export interface TimelineHeaderProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof timelineHeaderVariants> {
    variant?: 'default' |  'ghost';
}

const TimelineHeader = React.forwardRef<HTMLParagraphElement, TimelineHeaderProps>(
    ({className, variant, ...props}, ref) => (
    <div
        className={cn(timelineHeaderVariants({variant}), className)}
        ref={ref}
        {...props}
    />
));
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, children, ...props}, ref) => (
    <div
        ref={ref}
        className={cn('text-xl font-bold text-primary', className)}
        {...props}
    >
        {children}
    </div>
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineSubTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, children, ...props}, ref) => (
    <div
        ref={ref}
        className={cn('text-lg font-bold text-primary', className)}
        {...props}
    >
        {children}
    </div>
));
TimelineSubTitle.displayName = 'TimelineSubTitle';

const TimelineTime = ({
                          className,
                          variant = 'default',
                          ...props
                      }: React.ComponentProps<typeof Badge>) => {
    return (
        <Badge
            className={cn(
                'left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase',
                className
            )}
            variant={variant}
            {...props}
        >
            {props.children}
        </Badge>
    );
};
TimelineTime.displayName = 'TimelineTime';

const TimelineDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn('text-muted-foreground', className)}
        {...props}
    />
));
TimelineDescription.displayName = 'TimelineDescription';

export {
    Timeline,
    TimelineItem,
    TimelineHeader,
    TimelineTime,
    TimelineTitle,
    TimelineSubTitle,
    TimelineDescription,
    timelineHeaderVariants
};