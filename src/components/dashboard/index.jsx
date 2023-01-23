import { compose } from 'redux';
import { Slate } from 'slate-react';
import { Editable } from 'slate-react';
import isHotkey from 'is-hotkey';
import { Button } from '@mui/material';

import { toggleMark } from '../../Slate/actions';
import { HOTKEYS} from "../../constants";
import withError from '../../HOC/withError';
import { Toolbar } from "../../Slate/ToolBar";
import withLoading from '../../HOC/withLoading';
import { MarkButton } from "../../Slate/MarkButton";
import { BlockButton } from "../../Slate/BlockButton";

import 'material-icons/iconfont/material-icons.css';
import styles from "./index.module.scss";

export const DashboardComponent = (props) => {
    const {
        value,
        editor,
        setValue,
        handleLogout,
        renderLeaf,
        renderElement
    } = props;

    return (
        <>
            <Slate editor={editor} value={value} onChange={(v) => setValue(v)}>
                <Toolbar>
                    <MarkButton format="bold" icon="format_bold" />
                    <MarkButton format="italic" icon="format_italic" />
                    <MarkButton format="underline" icon="format_underlined" />
                    <BlockButton format="heading-one" icon="looks_one" />
                    <BlockButton format="heading-two" icon="looks_two" />
                    <BlockButton format="left" icon="format_align_left" />
                    <BlockButton format="center" icon="format_align_center" />
                    <BlockButton format="right" icon="format_align_right" />
                    <BlockButton format="justify" icon="format_align_justify" />
                </Toolbar>

                <div className={styles.editable_textarea}><Editable
                    className={styles.editable_text}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={event => {
                        for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event)) {
                                event.preventDefault()
                                const mark = HOTKEYS[hotkey]
                                toggleMark(editor, mark)
                            }
                        }
                    }}
                /></div>
            </Slate>
            <Button variant="contained" onClick={handleLogout} className={styles.logout_button}>Logout</Button>
        </>
    );
};

export default compose(
    withError,
    withLoading
)(DashboardComponent);