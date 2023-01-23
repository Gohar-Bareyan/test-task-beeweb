export const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
};

export const LIST_TYPES = ['numbered-list', 'bulleted-list'];
export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

export const INITIAL_VALUE = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is ',  },
            { text: 'editable' , underline: true },
            {text: ' '},
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: 'textarea!' },
        ],
    }
];