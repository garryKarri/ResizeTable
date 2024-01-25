import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Tree, Input } from "antd";
const { Header, Sider, Content } = Layout;

const DragLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const treeData = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          // disabled: true,
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [
            {
              title: (
                <span
                  style={{
                    color: "#1677ff",
                  }}
                >
                  sss
                </span>
              ),
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ];

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onDragStart = (info) => {
    // onDragEnter
    console.log(info);
    const { event, node } = info;
    // event.dataTransfer.setData("text/plain", JSON.stringify(node));
    // event.dataTransfer.setData("text", JSON.stringify(node.key));
    console.log(event.currentTarget);
  };
  const onDrop = (e) => {
    console.log(e);

    // const data = e.dataTransfer.getData("text");
    console.log(e.currentTarget);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
          <Tree
            // checkable
            defaultExpandedKeys={["0-0-0", "0-0-1"]}
            defaultSelectedKeys={["0-0-0", "0-0-1"]}
            onSelect={onSelect}
            treeData={treeData}
            draggable={{
              icon: false, // скрываем иконку перетаскивания
              nodeDraggable: () => true, // возвращаем true для всех узлов, делая их перетаскиваемыми
            }}
            // blockNode
            // onDragEnter={onDragEnter}
            onDragStart={onDragStart}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Input
              onDrop={onDrop}
              onDragOver={(event) => event.preventDefault()}
            ></Input>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default DragLayout;
