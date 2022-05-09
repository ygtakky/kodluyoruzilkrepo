import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import {
  selectHelpText,
  selectReadOnly,
  selectText,
} from "../redux/markdownSlice";
import remarkGfm from "remark-gfm";

function MarkdownShow() {
  const text = useSelector(selectText);
  const helpText = useSelector(selectHelpText);
  const readOnly = useSelector(selectReadOnly);

  return (
    <div className="markdown__container">
      <div className="markdown">
        <ReactMarkdown
          children={readOnly ? helpText : text}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
}

export default MarkdownShow;
