"use client";
import * as React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { searchSuggestion } from "@/lib/types";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  suggestions: searchSuggestion[];
  handleOption: (value: searchSuggestion) => void;
}

export function ComboboxDropdownMenu({ handleOption, suggestions, open, setOpen }: IProps) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          open
        </Button>
      </PopoverTrigger> */}
      <PopoverAnchor>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          asChild
          className="w-[400px] h-[250px] absolute top-[-150px]"
        >
          <Command loop>
            <CommandList>
              {/* <CommandGroup> */}
                {suggestions.map((value, idx) => (
                  <CommandItem
                    key={idx}
                    value={value.fullname}
                    onSelect={() => {
                      handleOption(value);
                      setOpen(false);
                    }}
                    onClick={() => {
                      handleOption(value);
                      setOpen(false);
                    }}
                    className="hover:bg-red-500 cursor-pointer"
                  >
                    {value.fullname}
                  </CommandItem>
                ))}
              {/* </CommandGroup> */}
            </CommandList>
          </Command>
        </PopoverContent>
      </PopoverAnchor>
    </Popover>
  );
}
