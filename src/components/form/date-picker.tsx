import { DatePicker } from "@/components/ui/datepicker"
import { Control, Controller } from "react-hook-form"
import { CalendarProps } from "../ui/calendar"
import FieldError from "./form-error"
import FieldLabel from "./form-label"

export function FormDatePicker({
    name,
    label,
    disabled,
    control,
    required = false,
    calendarProps,
    hideError = true,
    placeholder,
}: thisProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <FieldLabel
                    isError={!!control._formState.errors?.[name]}
                    htmlFor={name}
                    required={required}
                >
                    {label}
                </FieldLabel>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <DatePicker
                        calendarProps={{
                            ...calendarProps,
                            defaultMonth:
                                field.value ? new Date(field.value) : undefined,
                        }}
                        date={field.value ? new Date(field.value) : undefined}
                        setDate={field.onChange}
                        placeholder={placeholder || label}
                        disabled={field.disabled || disabled}
                        fullWidth
                    />
                )}
            />
            {!hideError && control._formState?.errors?.[name] && (
                <FieldError>
                    {control._formState.errors[name]?.message as string}
                </FieldError>
            )}
        </div>
    )
}

interface thisProps {
    name: string
    label?: string
    disabled?: boolean
    control: Control<any>
    required?: boolean
    calendarProps?: CalendarProps | undefined
    hideError?: boolean
    placeholder?: string
}
