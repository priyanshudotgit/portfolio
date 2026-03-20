import React from 'react';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300",
          "focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-1 focus:ring-offset-cream",
          {
            'bg-primary text-cream hover:bg-primary/90 hover:shadow-[0_4px_20px_rgba(0,96,74,0.3)]': variant === 'primary',
            'border border-primary text-charcoal hover:bg-primary hover:text-cream': variant === 'outline',
            'text-charcoal hover:bg-gold/10': variant === 'ghost',
            'px-6 py-3': size === 'sm',
            'px-8 py-4': size === 'md',
            'px-10 py-5 text-sm': size === 'lg'
          },
          className
        )}
        {...props} />);


  }
);
Button.displayName = 'Button';