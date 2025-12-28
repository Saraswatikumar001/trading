import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Coincontent from './coincontent'
import { Separator } from '../ui/separator'

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
        <NavigationMenu className='py-3 px-5 border-b font-medium flex justify-between items-center'>
            <div className='flex flex-row items-center gap-4'>
                <NavigationMenuItem>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[36px] sm:w-[36px] sm:h-[36px] text-textPrimary"><g clip-path="url(#clip0_88_28967)"><path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor"></path><path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor"></path></g><defs><clipPath id="clip0_88_28967"><rect width="26" height="22" fill="white" transform="translate(5 7)"></rect></clipPath></defs></svg>
                </NavigationMenuItem>
                <NavigationMenuItem className='overflow-auto flex overflow-x-hidden'>
                    {navItems.map(({ label, href }) => (
                        <NavigationMenuLink asChild key={href}>
                            <Button variant="ghost" className='hover:bg-[#526fff33] hover:text-[#526fff]'>
                                <Link className='text-[14px]' href={href}>{label}</Link>
                            </Button>
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuItem>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <NavigationMenuItem>
                    <Button variant="ghost" className='border px-2.5 rounded-full cursor-pointer'>
                        <i className="ri-search-2-line text-[14px]"></i>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='rounded-3xl text-[14px] gap-1 flex items-center px-2 border outline-none py-1 font-bold'>
                            <Coincontent coinName="SOL" coinLogo="S" gap="gap-2" />
                            <i className="ri-arrow-down-s-line text-xl"></i>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Solana</DropdownMenuItem>
                            <DropdownMenuItem>BNB</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Dialog>
                        <DialogTrigger className='bg-blue-500 text-black px-3 py-1 rounded-full font-bold text-[14px]'>Deposit</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Dialog>
                        <DialogTrigger className='px-2 py-1 rounded-full bg-zinc-800'>
                            <i className="ri-star-line text-[17px]"></i>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='px-2 py-1 rounded-full bg-zinc-800 outline-none'>
                            <i className="ri-notification-3-line text-[17px]"></i>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Solana</DropdownMenuItem>
                            <DropdownMenuItem>BNB</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='px-3 py-0.5 rounded-full bg-zinc-800 outline-none flex items-center'>
                            <i className="ri-wallet-line text-[17px]"></i>
                            <div className='flex gap-1 items-center'>
                                <Coincontent coinName="O" coinLogo="S" gap="gap-0" />
                                <Separator className='h-5 w-0.5 bg-zinc-700' />
                                <Coincontent coinName="O" coinLogo="S" gap="gap-0" />
                                <i className="ri-arrow-down-s-line text-xl"></i>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48'>
                            <DropdownMenuItem>Solana</DropdownMenuItem>
                            <DropdownMenuItem>BNB</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Dialog>
                        <DialogTrigger className='px-2 py-1 rounded-full bg-zinc-800'>
                            ES
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Dialog>
                        <DialogTrigger className='px-2 py-1 rounded-full bg-zinc-800'>
                            <i className="ri-user-settings-line text-[17px]"></i>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuItem>
            </div>
        </NavigationMenu>
    )
}

export default Navbar