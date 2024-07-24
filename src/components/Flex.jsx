const flexStyle = ( { alignItems, justifyContent, direction, ...props} ) => ( {
    display: props.flex ? 'inline-flex' : 'flex',
    alignItems,
    justifyContent,
    flexDirection: direction,
} );

export default function Flex ({
    alignItems = 'center',
    justifyContent,
    direction,
    gap,
    style,
    onClick,
   ...props
}) {
    const AsElement = props.as ?? 'div';

    return (
        <AsElement 
            style={ Object.assign(flexStyle({ alignItems, justifyContent, gap, direction }), style) }
            className={props.className}
            onClick={onClick}
        >
            {props.children}
        </AsElement>
    )
}