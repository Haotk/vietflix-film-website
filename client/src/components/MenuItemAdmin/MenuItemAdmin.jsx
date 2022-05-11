import React from 'react'
import { Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import {
    EyeOutlined,
    HomeOutlined,
    BarsOutlined,
    PlusOutlined,
    DesktopOutlined,
    LogoutOutlined
    
} from '@ant-design/icons';

const { SubMenu } = Menu;
export function MenuItemAdmin() {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }
    return (
        <Menu theme="light" mode="inline" >
            <Menu.Item key="/admin" icon={<HomeOutlined />}>
                <Link to="/admin">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="/orders" icon={<DesktopOutlined />}>
                <Link to="/orders">Tất cả phim</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BarsOutlined />} title="Phim lẻ">
                <Menu.Item key="/admin/list-movie" icon={<EyeOutlined />}>
                    <Link to="/admin/list-movie">Danh sách phim lẻ</Link>
                </Menu.Item>
                <Menu.Item key="/admin/add-movie" icon={<PlusOutlined />}>
                    <Link to="/admin/add-movie">Thêm phim lẻ</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<BarsOutlined />} title="Phim bộ">
                <Menu.Item key="/admin/list-tv-show" icon={<EyeOutlined />}>
                    <Link to="/admin/list-tv-show">Danh sách phim bộ</Link>
                </Menu.Item>
                <Menu.Item key="/admin/add-tv-show" icon={<PlusOutlined />}>
                    <Link to="/admin/add-tv-show">Thêm phim bộ</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<BarsOutlined />} title="Thể loại">
                <Menu.Item key="/admin/list-category" icon={<EyeOutlined />}>
                    <Link to="/admin/list-category">Danh sách thể loại</Link>
                </Menu.Item>
                <Menu.Item key="/admin/add-category" icon={<PlusOutlined />}>
                    <Link to="/admin/add-category">Thêm thể loại</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="/signout" icon={<LogoutOutlined />}>
            <button onClick={handleLogout}>Đăng xuất</button>
            </Menu.Item>

        </Menu>
    )
}