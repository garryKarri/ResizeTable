import Link from "next/link";

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#363739",
        color: "white",
      }}
    >
      <nav>
        <ul>
          <li>
            <Link href="/resize">Resize</Link>
          </li>
          <li>
            <Link href="/drag">Drag&Drop</Link>
          </li>
          <li>
            <Link href="/resizeFirstColumn">ResizeFirstColumn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IndexPage;
