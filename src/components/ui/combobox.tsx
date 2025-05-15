import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, ChevronsUpDown, Plus, X } from "lucide-react"
import { ClassNameValue } from "tailwind-merge"

export function Combobox({
    options,
    value,
    setValue,
    label,
    disabled,
    onAdd,
    isError,
    returnVal = "value",
    className,
}: {
    options: Item[] | undefined
    value: string | number | null
    setValue: (val: any) => void
    onAdd?: () => void
    label: string
    disabled?: boolean
    isError?: boolean
    returnVal?: "value" | "label"
    className?: ClassNameValue
}) {
    const handleSelect = (option: Item) => {
        const returnValue = returnVal === "label" ? option.label : option.value
        setValue(returnValue)
    }

    const handleClickAdd = () => {
        onAdd ? onAdd?.() : undefined
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                        "w-full justify-between bg-background px-2 hover:bg-background font-normal text-gray-400 hover:text-gray-400",
                        value && "font-medium text-foreground",
                        isError && " border-destructive",
                        className,
                    )}
                    disabled={disabled}
                >
                    <div className="flex items-center gap-2">
                        <ChevronsUpDown className=" h-4 w-4  text-primary opacity-50 " />
                        {value
                            ? options
                                  ?.find((d) => d.value == value)
                                  ?.label?.toString() || value
                            : label}
                    </div>
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClickAdd()
                        }}
                        className="bg-slate-200 hover:bg-slate-300 hover:scale-105 p-1 rounded-full"
                    >
                        <Plus className=" h-4 w-4 shrink-0  text-primary" />
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder={label} />
                    {!!value && (
                        <span className="absolute cursor-pointer text-destructive top-1.5 right-1 p-1">
                            <X
                                className="text-destructive"
                                width={16}
                                onClick={() => setValue(null)}
                            />
                        </span>
                    )}
                    <CommandList>
                        <CommandEmpty>Mavjud emas</CommandEmpty>
                        <CommandGroup>
                            {options?.map((d, i) => (
                                <CommandItem
                                    key={i}
                                    onSelect={() => handleSelect(d)}
                                >
                                    {d.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value == d[returnVal]
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

type Item = {
    label: string | number
    value: string | number
}
