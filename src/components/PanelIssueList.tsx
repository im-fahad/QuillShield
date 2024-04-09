import Icon from '@mdi/react';
import {
    mdiChevronRight,
    mdiCircle,
} from '@mdi/js';
export default function PanelIssueList() {
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
    );
}
