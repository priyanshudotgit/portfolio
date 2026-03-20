import React from 'react';
import { cn } from '../../utils/cn';
import { PlaqueCorners } from './PlaqueCorners';





export const Card = React.forwardRef(
  ({ className, children, withPlaque = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-tan/40 border-[1px] border-primary/15 transition-all duration-500",
          "hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,96,74,0.2)]",
          className
        )}
        {...props}>
        
        {withPlaque && <PlaqueCorners />}
        {children}
      </div>);

  }
);
Card.displayName = 'Card';