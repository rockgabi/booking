import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import codes from "@/data/currency"
import { Button } from "../ui/button"

type Props = {
  className?: string
}

export default async function CurrencyButton({ className }: Props) {
  return <Dialog modal={true}>
    <DialogTrigger className={className}>
      USD
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
      <DialogHeader className="space-y-3">
        <DialogTitle>Select your currency</DialogTitle>
        <DialogDescription>
          Where applicable prices will be converted to, and shown in, the currency that you select. The currency you pay in may differ based on your reservation, and a service fee may also apply.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-wrap overflow-y-auto flex-1">
        {codes.map((code) => (
          <button key={code.iso} className="flex flex-col w-[33%] py-2 px-4 text-left hover:bg-gray-100">
            <span>{code.countryName}</span>
            <span className="text-sm">{code.currency}</span>
          </button>
        ))}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Save</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}
