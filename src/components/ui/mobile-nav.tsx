import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export interface MobileNavProps {
  items: { href: string; label: string }[];
  className?: string;
}

export function MobileNav({ items, className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button
        variant="ghost"
        className={cn(
          "h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent aria-expanded:bg-transparent aria-expanded:text-inherit",
          className,
        )}
      />}>
        <div className="relative flex h-8 w-4 items-center justify-center">
          <div className="relative size-4">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                open ? "top-[0.4rem] -rotate-45" : "top-1",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                open ? "top-[0.4rem] rotate-45" : "top-2.5",
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </div>
        <span className="flex h-8 items-center text-lg font-medium leading-none">
          Meny
        </span>
      </PopoverTrigger>
      <PopoverContent
        className="h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100 data-open:animate-none!"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6 h-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-muted-foreground">
              Meny
            </div>
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={"/"}
                  hash={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-2xl font-medium transition-opacity duration-300 hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <Button size="lg" className="w-full">
              Boka samtal nu
            </Button>
            <span className="text-xs font-light">Vi hör av oss inom 24 timmar</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
