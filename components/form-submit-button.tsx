"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FormSubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function FormSubmitButton({
  children,
  className = "",
  onClick,
  type = "submit",
}: FormSubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (type !== "submit") {
      setIsLoading(true);

      // Simulate loading for demo purposes
      setTimeout(() => {
        setIsLoading(false);
        if (onClick) onClick();
      }, 1500);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // The loading state will be reset when the form submission completes
    // and the success modal appears
  };

  return (
    <Button
      type={type}
      className={`relative ${className}`}
      onClick={type !== "submit" ? handleClick : undefined}
      onSubmit={type === "submit" ? handleSubmit : undefined}
      disabled={isLoading}
    >
      {isLoading && (
        <span className="absolute left-4">
          <Loader2 className="h-4 w-4 animate-spin" />
        </span>
      )}
      {children}
    </Button>
  );
}
