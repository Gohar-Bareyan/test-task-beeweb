import { useSlate } from "slate-react";
import { Icon } from "@mui/material"; 

import { Button } from "./Button";
import { TEXT_ALIGN_TYPES } from "../constants";
import { isBlockActive, toggleBlock } from "./actions";

export const BlockButton = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <Button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
            )}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
};