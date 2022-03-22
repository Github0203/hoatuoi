import React, { useState } from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { datamenu } from "../data/datamenu";
import { unstable_batchedUpdates } from "react-dom";
const { SubMenu } = Menu;

const MenutopHeader = () => {
    const [current, setCurent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        setCurent(e.key);
    };
    return (
        <>

            {/* <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank"   rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu> */}

            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                {datamenu.map((item, i) => {
                    return (
                        <>
                        {console.log(item.subNav[i])}
                                    <Menu.Item key={item.key}>
                                        {item.title}
                                    </Menu.Item>                            
                                    <SubMenu key={item.key} title={item.title}>
                                        {item.subNav.map((sub, i) => {
                                            return (
                                                <>
                                                    { }
                                                    <Menu.ItemGroup key={sub.key}>
                                                        <Link to={sub.itemId}> {sub.title}</Link>
                                                    </Menu.ItemGroup>
                                                </>
                                            )
                                        })}
                                    </SubMenu>
                                   
                        </>
                    )
                })}
            </Menu>
        </>
    )
}
export default MenutopHeader



