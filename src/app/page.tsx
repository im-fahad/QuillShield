import Image from "next/image";
import Icon from '@mdi/react';
import {
    mdiChevronDown,
    mdiChevronRight,
    mdiCircle,
    mdiFile,
    mdiFolder,
    mdiFolderOutline,
    mdiMenuDown,
    mdiMenuRight
} from '@mdi/js';
import FolderFiles from "@/components/file-directory/FileDirectoryMenu";
import Breadcrumb from "@/components/Breadcrumb";
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
    ]
    const issueList = [
        {
            label: "Total Issues Found",
            value: 446,
            type: "total"
        },
        {
            label: "High Severity Issues",
            value: 108,
            type: "high"
        },
        {
            label: "Medium Severity Issues",
            value: 143,
            type: "medium"
        },
        {
            label: "Low Severity Issues",
            value: 0,
            type: "low"
        },
        {
            label: "Informational Issues",
            value: 68,
            type: "informational"
        },
        {
            label: "Optimisation Issues",
            value: 127,
            type: "optimisation"
        },
    ]
    return (
        <main className="qs-main">
            <div className="qs-main__inner">
                <nav className="qs-nav">
                    <div className="qs-nav__item">
                        <a href="/" className="qs-nav__logo">
                            <Image className="qs-nav__logo-img" src="/images/QuillShieldLogo.svg" alt="Logo" width={128}
                                   height={48}/>
                        </a>
                    </div>
                    <div className="qs-nav__item qs-nav__item--menu">
                        <ul className="qs-nav-menu">
                            <li className="qs-nav-menu__item">
                                <a href="/" className="qs-nav-menu__item-link active">
                                    AI Audit
                                </a>
                            </li>
                            <li className="qs-nav__menu-item">
                                <a href="/" className="qs-nav-menu__item-link">
                                    Manual Audit
                                </a>
                            </li>
                            <li className="qs-nav__menu-item">
                                <a href="/" className="qs-nav-menu__item-link">
                                    RedTeam
                                </a>
                            </li>
                            <li className="qs-nav__menu-item">
                                <a href="/" className="qs-nav-menu__item-link">
                                    Monitor
                                </a>
                            </li>
                            <li className="qs-nav__menu-item">
                                <a href="/" className="qs-nav-menu__item-link">
                                    Incident Response
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="qs-nav__item">
                        <div className="qs-nav__user">
                            <Image className="qs-nav__user-avatar" src="/images/DP.svg" alt="Logo" width={28}
                                   height={28}/>
                            <h1 className="qs-nav__user-name">Johhny Doe</h1>
                            <Icon className="qs-nav__user-icon" path={mdiChevronDown}/>
                        </div>
                    </div>
                </nav>
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
                            <div className="qs-panel__center-head">
                                <h2 className="qs-panel__center-title">Folder & Files</h2>
                            </div>
                        </div>
                        <div className="qs-panel__right">
                            <div className="qs-panel__right-head">
                                <Breadcrumb className="qs-panel__right-breadcrumb" data={[
                                    {name: "Count of Issues", link: "/"},
                                ]}/>
                            </div>
                            <div className="qs-issue-list">
                                <div className="qs-issue-list__tab">
                                    <button className="qs-issue-list__tab-item active">Current File</button>
                                    <button className="qs-issue-list__tab-item">Full Project</button>
                                </div>
                                <ul className="qs-issues">
                                    {issueList.map((item, key) => (
                                        <li className={`qs-issues__item ${item.type}`} key={key}>
                                            <div className="qs-issues__item-left">
                                                <Icon path={mdiCircle} size={.6} className="qs-issues__item-circle"/>
                                                <h1 className="qs-issues__item-value">{item.value}</h1>
                                            </div>
                                            <div className="qs-issues__item-right">
                                                <h2 className="qs-issues__item-label">
                                                    {item.label}
                                                </h2>
                                                <Icon path={mdiChevronRight} size={1.8}/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="qs-issue-list__footer">
                                    <div className="flex items-center">
                                        <input id="checked-checkbox" type="checkbox"
                                               className="w-[18px] h-[18px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0 cursor-pointer"/>
                                        <label htmlFor="checked-checkbox"
                                               className="ms-2 text-sm font-medium cursor-pointer">Exclude Dependencies</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
