import Image from "next/image";
import Icon from '@mdi/react';
import {mdiChevronDown} from '@mdi/js';

export default function Home() {
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
                            <Image className="qs-panel__head-icon" src="/images/UploadContractIcon.svg" alt="Project Icon" width={22} height={26}/>
                            <h1 className="qs-panel__head-title">Sample Project</h1>
                        </div>
                        <div className="qs-panel__head-right">
                            <button className="qs-panel__head-btn qs-panel__head-btn--add">Audit Now</button>
                            <button className="qs-panel__head-btn qs-panel__head-btn--options">Options</button>
                        </div>
                    </div>
                    
                    <div className="qs-panel__inner">
                        <div className="qs-panel__left"></div>
                        <div className="qs-panel__center"></div>
                        <div className="qs-panel__right"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
