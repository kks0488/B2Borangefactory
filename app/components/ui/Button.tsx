import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 버튼 스타일 정의 - 액센트 컬러는 primary 버튼에만 적용하고 나머지는 모노크로매틱 디자인
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // 주요 CTA 버튼에만 오렌지 컬러 사용
        primary: 
          "bg-[#FF8C00] text-white hover:bg-[#E67E00] shadow",
        
        // 나머지 버튼은 모노크로매틱 디자인
        default: 
          "bg-zinc-900 text-white hover:bg-zinc-800 shadow",
        secondary: 
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
        outline: 
          "border border-zinc-300 bg-transparent hover:bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
        ghost: 
          "bg-transparent hover:bg-zinc-100 text-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800",
        link: 
          "bg-transparent text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
        destructive: 
          "bg-red-500 text-white hover:bg-red-600 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 