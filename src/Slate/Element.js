export const Element = ({ attributes, children, element }) => {
    const style = { textAlign: element.align }
    
    switch (element.type) {
        case 'heading-one':
            return (
                <h1 style={style} {...attributes}>
                    {children}
                </h1>
            );
        case 'heading-two':
            return (
                <h2 style={style} {...attributes}>
                    {children}
                </h2>
            );
        default:
            return (
                <p style={style} {...attributes}>
                    {children}
                </p>
            );
    };
};