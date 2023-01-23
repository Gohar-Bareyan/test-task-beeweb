import { forwardRef } from "react";
import { cx, css } from '@emotion/css';

export const Button = forwardRef((
    {
        className,
        active,
        reversed,
        ...props
    },
    ref
) => (
    <span
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                  cursor: pointer;
                  color: ${reversed
                    ? active
                        ? 'white'
                        : '#aaa'
                    : active
                        ? 'black'
                        : '#ccc'};
                `
        )}
    />
)
);