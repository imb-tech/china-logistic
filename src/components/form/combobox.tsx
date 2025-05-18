import { Controller, Control } from "react-hook-form"
import FieldLabel from "./form-label"
import FieldError from "./form-error"
import { Combobox as ShadcnCombobox } from "@/components/ui/combobox"

 type ComboboxProps<T extends Record<string, any>> = {
    name: string
    label?: string
    placeholder?: string
    options: T[] | undefined
    disabled?: boolean
    required?: boolean
    control: Control<any>
    hideError?: boolean
    returnVal?: string
    onAdd?: () => void
    labelKey?: keyof T
    valueKey?: keyof T
    skeletonCount?: number
    isLoading?: boolean
    onSearchChange?: (val: string) => void
}

export function FormCombobox<T extends Record<string, any>>({
    name,
    label,
    options,
    disabled,
    placeholder,
    required,
    control,
    hideError = true,
    returnVal="id",
    valueKey,
    labelKey,
    onAdd,
    isLoading,
    skeletonCount,
    onSearchChange
}: ComboboxProps<T>) {
    return (
        <fieldset className="flex flex-col w-full">
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
                    <ShadcnCombobox
                        options={options}
                        value={field.value || ""}
                        setValue={field.onChange}
                        label={placeholder || label || "Tanlang"}
                        disabled={control._formState.disabled || disabled}
                        isError={!!control._formState.errors?.[name]}
                        returnVal={returnVal}
                        onAdd={onAdd}
                        valueKey={valueKey}
                        labelKey={labelKey}
                        isLoading={isLoading}
                        skeletonCount={skeletonCount}
                        onSearchChange={onSearchChange}
                    />
                )}
            />
            {!hideError && control._formState.errors?.[name] && (
                <FieldError>
                    {control._formState.errors[name]?.message as string}
                </FieldError>
            )}
        </fieldset>
    )
}
