import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import Link from 'next/link'
import { Button } from '../ui/button'

const Navbar = () => {
    const navItems = [
        { label: 'Discover', href: '/discover' },
        { label: 'Pulse', href: '/pulse' },
        { label: 'Trackers', href: '/trackers' },
        { label: 'Perpetuals', href: '/perpetuals' },
        { label: 'Yield', href: '/yield' },
        { label: 'Vision', href: '/vision' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Rewards', href: '/rewards' },
    ]
    return (
        <NavigationMenu className='py-3'>
            <NavigationMenuItem>
                {navItems.map(({ label, href }) => (
                    <NavigationMenuLink asChild key={href}>
                        <Button variant="ghost">
                            <Link href={href}>{label}</Link>
                        </Button>
                    </NavigationMenuLink>
                ))}
            </NavigationMenuItem>
        </NavigationMenu>
    )
}

export default Navbar