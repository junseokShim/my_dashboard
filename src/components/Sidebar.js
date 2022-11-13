import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  
  return (      
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Information</CDBSidebarHeader>
        
        <CDBSidebarContent>
            <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                Metrics
            </CDBSidebarMenuItem>
            </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
            >
            Sidebar Footer
            </div>
        </CDBSidebarFooter>
    </CDBSidebar>
)
};

export default Sidebar;
