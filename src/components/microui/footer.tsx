import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Coincontent from './coincontent'

const Footer = () => {
    return (
        <footer className='px-5 absolute bottom-0 w-full py-1 border-t'>
            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"secondary"} className='hover:bg-[#526fff40] bg-[#526fff33] text-[#526fff] text-[12px] font-bold h-6 px-2 rounded-[5px]'>
                                <i className="ri-list-settings-line"></i>
                                <span className='uppercase'>Preset 1</span>
                            </Button>
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
                    <Coincontent coinName="1" coinLogo={<i className="ri-wallet-line"></i>} gap="gap-1 ml-2" extraclasses='border rounded-full px-3 h-6 text-[12px]' extraaddons="border-none px-0" />
                </div>
            </div>
        </footer>
    )
}

export default Footer