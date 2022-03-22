import React from "react";
import BodyWrapper from "./BodyWrapper";
import Logo from "./Logo";
import MenutopHeader from "./MenutopHeader";

export const DashboardLayout = ({ children }) => {
    return (
        <BodyWrapper>
            <div className="top-header">
                <div className="top-header-left">
                    <Logo />
                </div>
                <div className="top-header-center">
                    <MenutopHeader />
                </div>
            </div>
        </BodyWrapper>
    )
}
