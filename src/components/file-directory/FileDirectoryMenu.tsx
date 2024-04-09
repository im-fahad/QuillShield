import FolderFilesItem from "@/components/file-directory/FileDirectoryMenuItem";

interface PropsTypes{
    data:any,
}

export default function FileDirectoryMenu(props:PropsTypes) {
    const {data}=props;
    
    return (
        <ul className="qs-menu">
            {data.map((item: any, key: number) => (
                <FolderFilesItem data={item} key={key}/>
            ))}
        </ul>
    );
}
