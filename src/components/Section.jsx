export default function Section({ title = "Default Title", children, ...props }) {
    return <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>;
}