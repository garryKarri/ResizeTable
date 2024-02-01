import { Table } from "antd";
import { useState } from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <td {...restProps}></td>;
  }
  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="custom-resize-handle"
        />
      }
      onResize={onResize}
      // draggableOpts={{ enableUserSelectHack: false }}
    >
      <td {...restProps}>
        <div>{restProps.children}</div>
      </td>
    </Resizable>
  );
};

const ResizableTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "ячейка 1",
      age: "яйчейка 2",
      address: "ячейка 3",
    },
    {
      key: "2",
      name: "ячейка 5",
      age: "ячейка 6",
      address: "ячейка 7",
    },
  ];

  const [columns, setColumns] = useState([
    {
      title: "столбец 1",
      dataIndex: "name",
      key: "name",
      width: 110,
      className: "fixed-resizable-column",
      align: "center",
      ellipsis: true,
    },
    {
      title: "столбец 2",
      dataIndex: "age",
      key: "age",
      width: 90,
      align: "center",
      ellipsis: true,
    },
    {
      title: "столбец 3",
      dataIndex: "address",
      key: "address",
      width: 220,
      align: "center",
      ellipsis: true,
    },
  ]);

  const handleResize =
    (index) =>
    (e, { size }) => {
      setColumns((prevColumns) => {
        const nextColumns = [...prevColumns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return nextColumns;
      });
    };

  const columnsData = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
    onCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  const components = {
    header: {
      cell: ResizableTitle,
    },
    body: {
      cell: ResizableTitle,
    },
  };

  return (
    <div style={{ width: "700px" }}>
      <Table
        bordered
        pagination={false}
        components={components}
        columns={columnsData}
        dataSource={dataSource}
        scroll={{ x: "max-content" }} // Установка горизонтальной прокрутки
      />
    </div>
  );
};

const RezizePage = () => {
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
      <ResizableTable />
    </div>
  );
};

export default RezizePage;

// import { Table } from "antd";
// import { useState } from "react";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";

// const dataSource = [
//   {
//     key: "1",
//     name: "ячейка 1",
//     age: "яйчейка 2",
//     address: "ячейка 3",
//   },
//   {
//     key: "2",
//     name: "ячейка 5",
//     age: "ячейка 6",
//     address: "ячейка 7",
//   },
// ];

// const columns = [
//   {
//     title: "столбец 1",
//     dataIndex: "name",
//     key: "name",
//     width: 110,
//     className: "fixed-resizable-column",
//     align: "center",
//     ellipsis: true,
//   },
//   {
//     title: "столбец 2",
//     dataIndex: "age",
//     key: "age",
//     width: 90,
//     align: "center",
//     ellipsis: true,
//   },
//   {
//     title: "столбец 3",
//     dataIndex: "address",
//     key: "address",
//     width: 220,
//     align: "center",
//     ellipsis: true,
//   },
// ];

// const ResizableTitle = (props) => {
//   const { onResize, width, ...restProps } = props;
//   if (!width) {
//     return <td {...restProps}></td>;
//   }
//   return (
//     <Resizable
//       width={width}
//       height={0}
//       handle={
//         <span
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//           className="custom-resize-handle"
//         />
//       }
//       onResize={onResize}
//       // draggableOpts={{ enableUserSelectHack: false }}
//     >
//       <td {...restProps}>
//         <div>{restProps.children}</div>
//       </td>
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
//     <div style={{ width: "500px" }}>
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
//           onCell: () => ({
//             width: col.width,
//             onResize: handleResize(index),
//           }),
//         }))}
//         components={components}
//         scroll={{ x: "max-content" }} // Установка горизонтальной прокрутки
//       />
//     </div>
//   );
// };

// const RezizePage = () => {
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

// export default RezizePage;
