"use client"
import Breadcrumb from "@/components/Breadcrumb";
import PanelIssueList from "@/components/PanelIssueList";

export default function PanelRight() {
    
    return (
        <div className="qs-panel__right">
            <div className="qs-panel__right-head">
                <Breadcrumb className="qs-panel__right-breadcrumb" data={[
                    {name: "Count of Issues", link: "/"},
                ]}/>
            </div>
            
            <PanelIssueList/>
        </div>
    );
}
