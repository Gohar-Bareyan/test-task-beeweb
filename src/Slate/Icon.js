import { forwardRef } from "react";
import { cx, css } from '@emotion/css';

export const Icon = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <span
            {...props}
            ref={ref}
            className={cx(
                'material-icons',
                className,
                css`
                  font-size: 22px;
                `
            )}
        />
    )
);