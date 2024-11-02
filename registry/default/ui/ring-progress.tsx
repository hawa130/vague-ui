import { forwardRef, HTMLAttributes, SVGAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface RingProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  thickness?: number
  size?: number
  rounded?: boolean
  rangeClassname?: string
}

const RingProgress = forwardRef<HTMLDivElement, RingProgressProps>(
  (
    { value = 0, max = 100, thickness = 6, size = 72, rounded, className, rangeClassname, children, style, ...props },
    ref,
  ) => {
    const curveProps: CurveProps = {
      size,
      max,
      className: rangeClassname,
      thickness: Math.min(thickness, size / 4),
    }

    return (
      <div
        role="progressbar"
        data-value={value}
        data-max={max}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={`${Math.round((value / max) * 100)}%`}
        className={cn('relative', className)}
        ref={ref}
        {...props}
      >
        <svg className="-rotate-90" width={size} height={size}>
          <Curve root {...curveProps} />
          <Curve rounded={rounded} value={value} {...curveProps} />
        </svg>
        {children && (
          <div
            className="absolute top-1/2 flex -translate-y-1/2 flex-col items-center justify-center"
            style={{ insetInline: thickness * 2 }}
          >
            {children}
          </div>
        )}
      </div>
    )
  },
)
RingProgress.displayName = 'RingProgress'

interface CurveProps extends SVGAttributes<SVGCircleElement> {
  rounded?: boolean
  value?: number
  max?: number
  size: number
  thickness: number
  root?: boolean
}

const Curve = forwardRef<SVGCircleElement, CurveProps>(
  ({ rounded = true, size, value = 0, max = 100, thickness, root, color, className, ...props }, ref) => {
    const radius = (size - thickness) / 2
    const perimeter = Math.PI * radius * 2

    return (
      <circle
        ref={ref}
        fill="none"
        data-root={root ? '' : undefined}
        className={cn(
          'stroke-primary-9 transition-[stroke-dashoffset] duration-200 data-[root]:stroke-muted',
          className,
        )}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={thickness}
        strokeLinecap={!root && rounded ? 'round' : 'butt'}
        strokeDasharray={root ? undefined : `${perimeter}, ${perimeter}`}
        strokeDashoffset={root ? undefined : (1 - Math.min(value, max) / max) * perimeter}
        {...props}
      />
    )
  },
)
Curve.displayName = 'Curve'

export { RingProgress }
