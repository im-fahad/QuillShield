"use client"
import FolderFiles from "@/components/file-directory/FileDirectoryMenu";

export default function PanelLeft() {
    const folderFiles = [
        {
            name: "Example Folder",
            type: "directory",
            isOpen: true,
            children: [
                {
                    name: "Sample Folder",
                    type: "directory",
                    isOpen: true,
                    children: [
                        {
                            name: "Folder",
                            type: "directory",
                            isOpen: false,
                            children: []
                        },
                        {
                            name: "Folder 123",
                            type: "directory",
                            isOpen: false,
                            children: []
                        },
                        {
                            name: "Example File 1",
                            type: "file",
                            isOpen: false,
                        },
                        {
                            name: "Example File 2",
                            type: "file",
                            isOpen: false,
                        },
                        {
                            name: "Example File 321",
                            type: "file",
                            isOpen: false,
                        },
                    ]
                },
                {
                    name: "Sample Folder",
                    type: "directory",
                    isOpen: false,
                    children: []
                },
                {
                    name: "Folder 123",
                    type: "directory",
                    isOpen: false,
                    children: []
                },
                {
                    name: "Example File 2",
                    type: "file",
                    isOpen: false,
                },
                {
                    name: "Example File 321",
                    type: "file",
                    isOpen: false,
                },
            ]
        }
    ];
    
    return (
        <div className="qs-panel__left">
            <div className="qs-panel__left-head">
                <h2 className="qs-panel__left-title">Folder & Files</h2>
            </div>
            
            <FolderFiles data={folderFiles}/>
        </div>
    );
}
