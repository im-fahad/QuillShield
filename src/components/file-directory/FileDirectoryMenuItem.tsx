import Icon from '@mdi/react';
import { mdiFile, mdiFolder, mdiFolderOutline, mdiMenuDown, mdiMenuRight} from '@mdi/js';
import React from "react";
import FolderFiles from "@/components/file-directory/FileDirectoryMenu";

interface PropsTypes{
    data:any,
    children?:React.ReactNode
}

export default function FileDirectoryMenuItem(props:PropsTypes) {
    const {data,children}=props;
    
    return (
        <li className="qs-menu__item">
            <div className={`qs-menu__item-inner ${data.isOpen ? "open" : ""}`}>
                {data.type === "directory" ? (
                    <>
                        {data.isOpen ? (
                            <>
                                <Icon className="qs-menu__item-arrow" path={mdiMenuDown} size={1}/>
                                <Icon className="qs-menu__item-icon" path={mdiFolderOutline} size={1}/>
                            </>
                        ) : (
                            <>
                                <Icon className="qs-menu__item-arrow" path={mdiMenuRight} size={1}/>
                                <Icon className="qs-menu__item-icon" path={mdiFolder} size={1}/>
                            </>
                        )}
                    
                    </>
                ) : (
                    <Icon className="qs-menu__item-icon" path={mdiFile} size={1}/>
                )}
                {data.name}
            </div>
            
            {data.type === "directory" && data.children.length ? (
                <FolderFiles data={data.children}/>
            ):""}
        </li>
    );
}
