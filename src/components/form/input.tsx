import { cn } from "@/lib/utils"
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormReturn,
} from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import { Input } from "../ui/input"
import FieldError from "./form-error"
import FieldLabel from "./form-label"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    required?: boolean
    registerOptions?: RegisterOptions<IForm>
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    prefixIcon?: React.ReactNode
    uppercase?: boolean // Added new prop
}

export function FormInput<IForm extends FieldValues>({
    methods,
    name,
    label,
    required = false,
    registerOptions,
    wrapperClassName,
    className,
    type = "text",
    hideError = true,
    uppercase = false, // Default value false
    ...props
}: IProps<IForm> & React.InputHTMLAttributes<HTMLInputElement>) {
    const {
        register,
        formState: { errors },
    } = methods

    const reg = register(name, {
        required: {
            value: required,
            message: methods.formState.errors[name]?.message as any,
        },
        ...(uppercase && {
            setValueAs: (value: string) => value?.toUpperCase(),
        }), // Transform value to uppercase if uppercase is true
        ...registerOptions,
    })

    return (
        <fieldset className={cn("flex flex-col w-full", wrapperClassName)}>
            {label && (
                <FieldLabel
                    htmlFor={name}
                    required={required}
                    isError={!!errors?.[name]}
                >
                    {label}
                </FieldLabel>
            )} 
            <Input
                type={type}
                placeholder={props.placeholder || label}
                {...reg}
                {...props}
                id={name}
                fullWidth
                className={cn(
                    !!errors?.[name] && label
                        ? "border-destructive focus:border-border !ring-destructive"
                        : "",
                    uppercase && "uppercase placeholder:capitalize", // Add uppercase class for visual feedback
                    className,
                )}
            />
            {!hideError && errors[name] && (
                <FieldError>{errors[name]?.message as string}</FieldError>
            )}
        </fieldset>
    )
}

export default FormInput
