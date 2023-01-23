import { useSlate } from "slate-react";

import { Icon } from "./Icon";
import { Button } from "./Button";
import { isMarkActive, toggleMark } from "./actions";

export const MarkButton = ({ format, icon }) => {
    const editor = useSlate();

    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
};