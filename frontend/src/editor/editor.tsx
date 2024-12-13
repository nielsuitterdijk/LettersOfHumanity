import "./editor.css";
import EditorMenu from "./menu";

export default function Editor() {
  return (
    <div className="editor-page">
      <div className="page-container">
        <div className="editor-header">
          <img src="Banner.png" style={{ maxHeight: "150px" }} />
        </div>
        <EditorMenu />
        <div className="a4-page"></div>
      </div>
    </div>
  );
}
