interface Types {
    data: { name: string, link: string }[],
    className?:string
}

export default function Breadcrumb(props: Types) {
    const {data,className} = props;
    return (
        <ul className={`qs-breadcrumb ${className}`}>
            {data.map((item, key) => (
                <li className="qs-breadcrumb__item" key={key}>
                    <a href={item.link} className="qs-breadcrumb__item-link">{item.name}</a>
                </li>
            ))}
        </ul>
    );
}
