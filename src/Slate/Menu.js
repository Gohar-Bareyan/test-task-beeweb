import { forwardRef } from "react";
import { cx, css } from '@emotion/css';

export const Menu = forwardRef((
    { className, ...props },
    ref
) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                  & > * {
                    display: inline-block;
                  }
                  & > * + * {
                    margin-left: 15px;
                  }
                `
        )}
    />
)
);