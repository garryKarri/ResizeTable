import { Table } from "antd";
import { useState } from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const dataSource = [
  {
    key: "1",
    name: "张三",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "李四",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    width: 110,
    className: "resizable-column",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    width: 90,
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    width: 220,
  },
];

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <td {...restProps}></td>;
  }
  return (
    <Resizable
      width={width}
      height={0}
      handle={<span className="custom-resize-handle" />}
      onResize={onResize}
      // draggableOpts={{ enableUserSelectHack: false }}
    >
      <td {...restProps}>
        <div>{restProps.children}</div>
      </td>
    </Resizable>
  );
};

const ResizableTable = ({ dataSource, columns }) => {
  const [tableColumns, setTableColumns] = useState(columns);

  const handleResize =
    (columnIndex) =>
    (e, { size }) => {
      setTableColumns((prevColumns) => {
        const newColumns = [...prevColumns];
        newColumns[columnIndex].width = size.width;
        return newColumns;
      });
    };

  const components = {
    header: {
      cell: ResizableTitle,
    },
    body: {
      cell: ResizableTitle,
    },
  };

  return (
    <div>
      <Table
        bordered
        pagination={false}
        dataSource={dataSource}
        columns={tableColumns.map((col, index) => ({
          ...col,
          onHeaderCell: () => ({
            width: col.width,
            onResize: handleResize(index),
          }),
          onCell: () => ({
            width: col.width,
            onResize: handleResize(index),
          }),
        }))}
        components={components}
      />
    </div>
  );
};

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#202124",
      }}
    >
      <ResizableTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default IndexPage;

// import { Table } from "antd";
// import { useState } from "react";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";

// const dataSource = [
//   {
//     key: "1",
//     name: "张三",
//     age: 32,
//     address: "西湖区湖底公园1号",
//   },
//   {
//     key: "2",
//     name: "李四",
//     age: 42,
//     address: "西湖区湖底公园1号",
//   },
// ];

// const columns = [
//   {
//     title: "姓名",
//     dataIndex: "name",
//     key: "name",
//     width: 110,
//     className: "resizable-column",
//   },
//   {
//     title: "年龄",
//     dataIndex: "age",
//     key: "age",
//     width: 90,
//   },
//   {
//     title: "住址",
//     dataIndex: "address",
//     key: "address",
//     width: 220,
//   },
// ];

// const ResizableTitle = (props) => {
//   const { onResize, width, ...restProps } = props;
//   if (!width) {
//     return <th {...restProps} />;
//   }
//   return (
//     <Resizable
//       width={width}
//       height={0}
//       handle={
//         <span className="custom-resize-handle" />
//       }
//       onResize={onResize}
//       draggableOpts={{ enableUserSelectHack: false }}
//     >
//       <th {...restProps}>
//         <div>{restProps.children}</div>
//       </th>
//     </Resizable>
//   );
// };

// const ResizableTable = ({ dataSource, columns }) => {
//   const [tableColumns, setTableColumns] = useState(columns);

//   const handleResize =
//     (columnIndex) =>
//     (e, { size }) => {
//       setTableColumns((prevColumns) => {
//         const newColumns = [...prevColumns];
//         newColumns[columnIndex].width = size.width;
//         return newColumns;
//       });
//     };

//   const components = {
//     header: {
//       cell: ResizableTitle,
//     },
//     body: {
//       cell: ResizableTitle,
//     },
//   };

//   return (
//     <div>
//       <Table
//         bordered
//         pagination={false}
//         dataSource={dataSource}
//         columns={tableColumns.map((col, index) => ({
//           ...col,
//           onHeaderCell: () => ({
//             width: col.width,
//             onResize: handleResize(index),
//           }),
//         }))}
//         components={components}
//       />
//     </div>
//   );
// };

// const IndexPage = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         background: "#202124",
//       }}
//     >
//       <ResizableTable dataSource={dataSource} columns={columns} />
//     </div>
//   );
// };

// export default IndexPage;
