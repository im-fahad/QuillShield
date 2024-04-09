"use client"
import Image from "next/image";
import FolderFiles from "@/components/file-directory/FileDirectoryMenu";
import Breadcrumb from "@/components/Breadcrumb";
import Nav from "@/components/Nav";
import PanelIssueList from "@/components/PanelIssueList";
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";
import Editor from '@monaco-editor/react';

export default function Home() {
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
    const breadcrumbs = [
        {
            name: "AI Audit",
            link: "/"
        },
        {
            name: "My Projects",
            link: "/"
        },
        {
            name: "Code Editor",
            link: "/"
        },
    ];
    const editorValue = "uint32 lower = 0;\n" +
        "uint32 upper = nCheckpoints - 1;\n" +
        "while (upper > lower) {\n" +
        "    uint32 center = upper - (upper - lower) / 2;  // ceil, avoiding overflow\n" +
        "    Checkpoint memory cp = checkpoints[account][center];\n" +
        "    if (cp.fromBlock == blockNumber) {\n" +
        "        return cp.votes;\n" +
        "        }\n" +
        "        uint32 lower = 0;\n" +
        "        uint32 upper = nCheckpoints - 1;\n" +
        "        while (upper > lower) {\n" +
        "            uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow\n" +
        "             Checkpoint memory cp = checkpoints[account][center];\n" +
        "             if (cp.fromBlock == blockNumber) {\n" +
        "                return cp.votes;\n" +
        "                } uint32 lower = 0;\n" +
        "                uint32 upper = nCheckpoints - 1;\n" +
        "                while (upper > lower) {\n" +
        "                    uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow\n" +
        "                    Checkpoint memory cp = checkpoints[account][center];\n" +
        "                    if (cp.fromBlock == blockNumber) {\n" +
        "                        return cp.votes;\n" +
        "                        } while (upper > lower) {\n" +
        "                            uint32 lower = 0;\n" +
        "                            uint32 upper = nCheckpoints - 1;\n" +
        "                            while (upper > lower) {\n" +
        "                                uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow\n" +
        "                                Checkpoint memory cp = checkpoints[account][center];\n" +
        "                                if (cp.fromBlock == blockNumber) {\n" +
        "                                    return cp.votes;\n" +
        "                                    }";
    
    return (
        <main className="qs-main">
            <div className="qs-main__inner">
                <Nav/>
                
                <Breadcrumb data={breadcrumbs}/>
                
                <div className="qs-panel">
                    <div className="qs-panel__head">
                        <div className="qs-panel__head-left">
                            <Image className="qs-panel__head-icon" src="/images/UploadContractIcon.svg"
                                   alt="Project Icon" width={22} height={26}/>
                            <h1 className="qs-panel__head-title">Sample Project</h1>
                        </div>
                        <div className="qs-panel__head-right">
                            <button className="qs-panel__head-btn qs-panel__head-btn--add">Audit Now</button>
                            <button className="qs-panel__head-btn qs-panel__head-btn--options">Options</button>
                        </div>
                    </div>
                    
                    <div className="qs-panel__inner">
                        <div className="qs-panel__left">
                            <div className="qs-panel__left-head">
                                <h2 className="qs-panel__left-title">Folder & Files</h2>
                            </div>
                            
                            <FolderFiles data={folderFiles}/>
                        </div>
                        <div className="qs-panel__center">
                            <ul className="panel-tab">
                                <li className="panel-tab__item active">
                                    Example File 1
                                    <Icon className="panel-tab__item-icon" path={mdiClose} size={.8}/>
                                </li>
                                <li className="panel-tab__item">
                                    Example Folder
                                    <Icon className="panel-tab__item-icon" path={mdiClose} size={.8}/>
                                </li>
                                <li className="panel-tab__item">
                                    File 123
                                    <Icon className="panel-tab__item-icon" path={mdiClose} size={.8}/>
                                </li>
                                <li className="panel-tab__item">
                                    Sample File
                                    <Icon className="panel-tab__item-icon" path={mdiClose} size={.8}/>
                                </li>
                            </ul>
                            <div className="panel-editor">
                                <Editor height="100%"
                                        defaultLanguage="sol"
                                        defaultValue={editorValue} theme="hc-black"/>
                            </div>
                        </div>
                        <div className="qs-panel__right">
                            <div className="qs-panel__right-head">
                                <Breadcrumb className="qs-panel__right-breadcrumb" data={[
                                    {name: "Count of Issues", link: "/"},
                                ]}/>
                            </div>
                            
                            <PanelIssueList/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
