import { Table } from "antd";
import { useState } from "react";
import { Resizable } from "react-resizable";

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

const columns = [
  {
    title: "столбец 1",
    dataIndex: "name",
    key: "name",
    width: 200,
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
];



const ResizableTitle = (props) => {
  const { onResize, width, columnIndex, ...restProps } = props;

  const handleResizeClick = (e) => {
    e.stopPropagation();
  };

  if (!width) {
    return <td {...restProps}></td>;
  }

  // Показываем курсор ресайза только для первой колонки
  const showResizeCursor = columnIndex === 0;

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        showResizeCursor ? (
          <span onClick={handleResizeClick} className="custom-resize-handle" />
        ) : null
      }
      onResize={onResize}
    >
      <td {...restProps}>
        <div>{restProps.children}</div>
      </td>
    </Resizable>
  );
};

const ResizableTable = ({ dataSource, columns }) => {
  const [tableColumns, setTableColumns] = useState(columns);

  

  // Ресайз первой колонки с минимальной шириной
  const MIN_WIDTH = 200; // Минимальная ширина для первой колонки
  const handleResize =
    (columnIndex) =>
    (e, { size }) => {
      if (columnIndex === 0) {
        // Если новая ширина меньше минимальной, устанавливаем минимальную ширину
        const newWidth = size.width < MIN_WIDTH ? MIN_WIDTH : size.width;
        setTableColumns((prevColumns) => {
          const newColumns = [...prevColumns];
          newColumns[columnIndex].width = newWidth;
          return newColumns;
        });
      }
    };
  // Ресайз для первой колонки без ограничения по ширине
  // const handleResize = (columnIndex) => (e, { size }) => {
  //   if (columnIndex === 0) {
  //     setTableColumns((prevColumns) => {
  //       const newColumns = [...prevColumns];
  //       newColumns[columnIndex].width = size.width;
  //       return newColumns;
  //     });
  //   }
  // };

  const components = {
    header: {
      cell: ResizableTitle,
    },
    body: {
      cell: ResizableTitle,
    },
  };

  return (
    <div style={{ width: "500px" }}>
      <Table
        bordered
        pagination={false}
        dataSource={dataSource}
        columns={tableColumns.map((col, index) => ({
          ...col,
          onHeaderCell: () => ({
            width: col.width,
            onResize: handleResize(index),
            columnIndex: index, // передаем индекс колонки
          }),
          onCell: () => ({
            width: col.width,
            onResize: handleResize(index),
            columnIndex: index, // передаем индекс колонки
          }),
        }))}
        components={components}
        scroll={{ x: 300 }}
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
      <ResizableTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default RezizePage;