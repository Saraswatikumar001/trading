import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const Seconadrynavigation = () => {
    return (
        <div className="max-w-full border-b px-4 py-0.5">
            <div className="flex items-center gap-3">
                <Button variant={'ghost'} className="px-1 h-6 opacity-50 hover:opacity-100">
                    <i className="ri-settings-5-line"></i>
                </Button>
                <Separator className="h-5 w-0.5" />
                <Button variant={'ghost'} className="px-1 h-6">
                    <i className="ri-star-line"></i>
                </Button>
                <Button variant={'ghost'} className="px-1 h-6 opacity-50 hover:opacity-100">
                    <i className="ri-line-chart-line"></i>
                </Button>
                <Separator className="h-5 w-0.5" />
            </div>
        </div>
    )
}

export default Seconadrynavigation