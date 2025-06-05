"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InputOTPProps {
  maxLength: number
  value: string
  onChange: (value: string) => void
  className?: string
  containerClassName?: string
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ maxLength, value, onChange, className, containerClassName }, ref) => {
    const handleChange = (index: number, digit: string) => {
      if (digit.length > 1) return
      const newValue = value.split("")
      newValue[index] = digit
      onChange(newValue.join(""))
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-2 has-[:disabled]:opacity-50",
          containerClassName
        )}
      >
        {Array.from({ length: maxLength }).map((_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            className={cn(
              "h-10 w-10 border border-input bg-background text-center text-sm transition-all",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "rounded-md border border-gray-200",
              className
            )}
          />
        ))}
      </div>
    )
  }
)
InputOTP.displayName = "InputOTP"

export { InputOTP }
