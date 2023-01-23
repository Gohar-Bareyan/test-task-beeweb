import { forwardRef } from "react";
import { cx, css } from '@emotion/css';

import { Menu } from "./Menu";

export const Toolbar = forwardRef((
    { className, ...props },
    ref
) => (
    <Menu
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                  position: relative;
                  padding: 20px 50px 17px;
                  margin: 0 550px;
                  border-bottom: 2px solid #eee;
                  margin-bottom: 20px;
                `
        )}
    />
)
);