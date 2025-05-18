import { Controller, Control } from "react-hook-form"
import FieldLabel from "./form-label"
import FieldError from "./form-error"
import Select from "../ui/select"

export function FormSelect<T extends Record<string, any>>({
    name,
    label,
    options,
    disabled,
    required,
    control,
    setValue,
    valueKey,
    labelKey,
    hideError = true,
}: thisProps<T>) {
    return (
        <div className="w-full">
            {label && (
                <FieldLabel
                    htmlFor={name}
                    required={!!required}
                    isError={!!control._formState.errors?.[name]}
                >
                    {label}
                </FieldLabel>
            )}
            <Controller
                name={name}
                control={control}
                rules={
                    required
                        ? { required: `${label || name} to‘ldirilishi shart` }
                        : {}
                }
                render={({ field }) => (
                    <div className={label ? "pt-[2px]" : ""}>
                        <Select
                            options={options}
                            label={label || "Tanlang"}
                            value={field.value}
                            className={!!control._formState.errors?.[name] && "border-destructive focus:right-0 "}
                            setValue={(val) =>
                                val === "other"
                                    ? setValue?.(val)
                                    : field.onChange(val)
                            }
                            disabled={disabled}
                            labelKey={labelKey}
                            valueKey={valueKey}
                        />
                    </div>
                )}
            />
            {!hideError && control._formState.errors?.[name] && (
                <FieldError>
                    {control._formState.errors[name]?.message as string}
                </FieldError>
            )}
        </div>
    )
}

type thisProps<T extends Record<string, any>> = {
    name: string
    label?: string
    options: T[]
    disabled?: boolean
    required?: boolean
    setValue?: (val: string) => void
    control: Control<any>
    hideError?: boolean
    labelKey?: keyof T
    valueKey?: keyof T
}
