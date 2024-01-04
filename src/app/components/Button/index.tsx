"use client"
import classNames from "classnames"
import React, { ComponentProps } from "react"

type Props = {} & ComponentProps<"button">

const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={classNames(
        "border-2 border-gray-200 rounded-lg",
        "px-4 py-2",
        "hover:bg-gray-200 transition-all",
        className
      )}
      data-cy="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
