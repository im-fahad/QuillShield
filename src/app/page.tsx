import Image from "next/image";
import Icon from '@mdi/react';
import {mdiChevronDown, mdiFile, mdiFolder, mdiFolderOutline, mdiMenuDown, mdiMenuRight} from '@mdi/js';

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
                <ul className="qs-breadcrumb">
                    <li className="qs-breadcrumb__item">
                        <a href="#" className="qs-breadcrumb__item-link">AI Audit</a>
                    </li>
                    <li className="qs-breadcrumb__item">
                        <a href="#" className="qs-breadcrumb__item-link">My Projects</a>
                    </li>
                    <li className="qs-breadcrumb__item">
                        <a href="#" className="qs-breadcrumb__item-link active">Code Editor</a>
                    </li>
                </ul>
                
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
                            
                            <ul className="qs-menu">
                                {folderFiles.map((item:any,key:number)=> (
                                    <li className="qs-menu__item" key={key}>
                                        <div className={`qs-menu__item-inner ${item.isOpen? "open":""}`}>
                                            {item.type === "directory" ? (
                                                <>
                                                    {item.isOpen ?(
                                                        <>
                                                            <Icon className="qs-menu__item-arrow" path={mdiMenuDown} size={1} />
                                                            <Icon className="qs-menu__item-icon" path={mdiFolderOutline} size={1} />
                                                        </>
                                                    ):(
                                                        <>
                                                            <Icon className="qs-menu__item-arrow" path={mdiMenuRight} size={1} />
                                                            <Icon className="qs-menu__item-icon" path={mdiFolder} size={1} />
                                                        </>
                                                    )}
                                                
                                                </>
                                            ):(
                                                <Icon className="qs-menu__item-icon" path={mdiFile} size={1} />
                                            )}
                                            {item.name}
                                        </div>
                                        
                                        {item.type === "directory" && item.children.length ? (
                                            <ul className="qs-menu" key={key}>
                                                {item.children.map((item:any, key:number) => (
                                                    <li className="qs-menu__item" key={key}>
                                                        <div className={`qs-menu__item-inner ${item.isOpen? "open":""}`}>
                                                            {item.type === "directory" ? (
                                                                <>
                                                                    {item.isOpen ? (
                                                                        <>
                                                                            <Icon className="qs-menu__item-arrow"
                                                                                  path={mdiMenuDown} size={1}/>
                                                                            <Icon className="qs-menu__item-icon"
                                                                                  path={mdiFolderOutline} size={1}/>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <Icon className="qs-menu__item-arrow"
                                                                                  path={mdiMenuRight} size={1}/>
                                                                            <Icon className="qs-menu__item-icon"
                                                                                  path={mdiFolder} size={1}/>
                                                                        </>
                                                                    )}
                                                                
                                                                </>
                                                            ) : (
                                                                <Icon className="qs-menu__item-icon" path={mdiFile}
                                                                      size={1}/>
                                                            )}
                                                            {item.name}
                                                        </div>
                                                        
                                                        {item.type === "directory" && item.children.length ? (
                                                            <ul className="qs-menu" key={key}>
                                                                {item.children && item.children.map((item:any, key:number) => (
                                                                    <li className="qs-menu__item" key={key}>
                                                                        <div className={`qs-menu__item-inner ${item.isOpen? "open":""}`}>
                                                                            {item.type === "directory" ? (
                                                                                <>
                                                                                    {item.isOpen ? (
                                                                                        <>
                                                                                            <Icon
                                                                                                className="qs-menu__item-arrow"
                                                                                                path={mdiMenuDown}
                                                                                                size={1}/>
                                                                                            <Icon
                                                                                                className="qs-menu__item-icon"
                                                                                                path={mdiFolderOutline}
                                                                                                size={1}/>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <Icon
                                                                                                className="qs-menu__item-arrow"
                                                                                                path={mdiMenuRight}
                                                                                                size={1}/>
                                                                                            <Icon
                                                                                                className="qs-menu__item-icon"
                                                                                                path={mdiFolder}
                                                                                                size={1}/>
                                                                                        </>
                                                                                    )}
                                                                                
                                                                                </>
                                                                            ) : (
                                                                                <Icon className="qs-menu__item-icon"
                                                                                      path={mdiFile}
                                                                                      size={1}/>
                                                                            )}
                                                                            {item.name}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ):""}
                                                    </li>
                                                ))}
                                            </ul>
                                        ):""}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="qs-panel__center">
                            <div className="qs-panel__center-head">
                                <h2 className="qs-panel__center-title">Folder & Files</h2>
                            </div>
                        </div>
                        <div className="qs-panel__right">
                            <div className="qs-panel__right-head">
                                <h2 className="qs-panel__right-title">Folder & Files</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
