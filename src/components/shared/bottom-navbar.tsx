import React from 'react';

import { cn } from '@/lib/utils.ts';
import { Home, Search, User, Settings } from 'lucide-react';
import {Link} from "react-router-dom";

interface NavItem {
    href: string;
    label: string;
    icon: React.ReactNode;
}

interface BottomNavProps {
    items?: NavItem[];
    className?: string;
}

const defaultItems: NavItem[] = [
    {
        href: '/',
        label: 'Home',
        icon: <Home className="h-6 w-6" />
    },
    {
        href: '/search',
        label: 'Search',
        icon: <Search className="h-6 w-6" />
    },
    {
        href: '/profile',
        label: 'Profile',
        icon: <User className="h-6 w-6" />
    },
    {
        href: '/settings',
        label: 'Settings',
        icon: <Settings className="h-6 w-6" />
    }
];

const BottomNav = ({
                       items = defaultItems,
                       className
                   }: BottomNavProps) => {
    return (
        <nav
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around bg-background border-t",
                className
            )}
        >
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={item.href}
                    className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary focus:text-primary"
                >
                    {item.icon}
                    <span className="text-xs font-medium">{item.label}</span>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNav;