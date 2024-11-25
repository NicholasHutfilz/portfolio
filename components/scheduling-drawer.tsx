import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger, // Add this import
} from "@/components/ui/drawer"

// Accept open and onOpenChange as props
export function SchedDrawer({ open, onOpenChange }) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}> {/* Use props here */}
      <DrawerTrigger asChild>
        <Button>Book a Meeting</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Schedule a Meeting</DrawerTitle>
            <DrawerDescription>Use the Reclaim.ai scheduling tool embedded below to book a meeting!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="relative w-full" style={{ height: '350px' }}>
                <iframe 
                src="https://app.reclaim.ai/e/cbdae701-5320-4de9-827e-f62fea5bb400" 
                width="100%" 
                height="100%" 
                style={{ outline: 'none', border: 'none' }} 
                title="Reclaim AI"
                />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}