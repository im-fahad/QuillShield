"use client"
import Breadcrumb from "@/components/Breadcrumb";
import PanelIssueList from "@/components/PanelIssueList";
import {useEffect, useState} from "react";
import Icon from "@mdi/react";
import {mdiChevronRight, mdiCircle} from "@mdi/js";

export default function PanelRight() {
    const [selectedIssue, setSelectedIssue] = useState<any>(null);
    const [selectedIssue2, setSelectedIssue2] = useState<any>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<{ name: string, link: string }[]>([]);
    
    useEffect(() => {
        if (selectedIssue && selectedIssue2) {
            setBreadcrumbs([
                {
                    name: "Count of Issues",
                    link: "/"
                },
                {
                    name: selectedIssue?.label,
                    link: "/"
                },
                {
                    name: `Issue #${selectedIssue2?.value}`,
                    link: "/"
                }
            ])
        } else if (selectedIssue) {
            setBreadcrumbs([{
                name: "Count of Issues",
                link: "/"
            }, {
                name: selectedIssue?.label,
                link: "/"
            }])
        } else {
            setBreadcrumbs([{
                name: "Count of Issues",
                link: "/"
            }])
        }
    }, [selectedIssue, selectedIssue2]);
    
    const issues = [
        {
            label: "Lorem ipsum dolor sit ame",
            value: 1
        },
        {
            label: "Lorem ipsum dolor sit ame",
            value: 2
        },
        {
            label: "Lorem ipsum dolor sit ame",
            value: 3
        },
        {
            label: "Lorem ipsum dolor sit ame",
            value: 4
        },
        {
            label: "Lorem ipsum dolor sit ame",
            value: 5
        },
    ]
    
    return (
        <div className="qs-panel__right">
            <div className="qs-panel__right-head">
                <Breadcrumb className="qs-panel__right-breadcrumb" data={breadcrumbs}/>
            </div>
            
            {selectedIssue && selectedIssue2 ? (
                <div className="qs-issue-list">
                    <div className={`qs-issue-list__selected !py-3 gap-2 ${selectedIssue.type}`}>
                        <Icon path={mdiCircle} size={.4} className="qs-issues__item-circle"/>
                        <h2 className="qs-issue-list__selected-label !justify-start">#{selectedIssue2.value}. {selectedIssue2.label}</h2>
                    </div>
                    <ul className="qs-issues">
                        <li className={`qs-issues__item !flex-col !gap-5`}>
                            <h2 className="qs-issues__item-label !text-xs">
                                <span className="text-blue-500">
                                    Description:
                                </span>
                                <br/>
                                Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut
                                labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation
                                ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor
                                indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do
                                eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit
                                amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna
                                aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut
                                aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore
                                magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt
                                utio labore et dolore magna aliqua.
                            </h2>
                            <h2 className="qs-issues__item-label !text-xs">
                                <span className="text-blue-500">
                                    Remediation:
                                </span>
                                <br/>
                                Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut
                                labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation
                                ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor
                                indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do
                                eiusmod tempor ididunt utio labore et dolore magna aliqua.
                            </h2>
                        </li>
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
            ) : selectedIssue ? (
                <div className="qs-issue-list">
                    <div className="qs-issue-list__selected">
                        <h1 className={`qs-issue-list__selected-value ${selectedIssue.type}`}>
                            <Icon path={mdiCircle} size={.6} className="qs-issues__item-circle"/>
                            {selectedIssue.value}
                        </h1>
                        <h2 className="qs-issue-list__selected-label">{selectedIssue.label}</h2>
                    </div>
                    <ul className="qs-issues">
                        {issues.map((item, key) => (
                            <li className={`qs-issues__item`} key={key} onClick={() => setSelectedIssue2(item)}>
                                <div className="qs-issues__item-left pr-1 flex-1">
                                    <h2 className="qs-issues__item-label">
                                        {item.label}
                                    </h2>
                                </div>
                                <Icon path={mdiChevronRight} size={1}/>
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
            ) : (
                <PanelIssueList onSelect={setSelectedIssue}/>
            )}
        </div>
    );
}
