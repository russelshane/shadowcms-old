import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Image from "@tiptap/extension-image";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import Link from "@tiptap/extension-link";
import Embed from "./plugins/embed";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";
import MentionConfig from "./config/MentionConfig";
import PlaceholderConfig from "./config/PlaceholderConfig";

const DefaultExtensions = [
  StarterKit.configure({
    history: false,
    heading: {
      levels: [2, 3],
    },
  }),
  Mention.configure(MentionConfig),
  Placeholder.configure(PlaceholderConfig),
  Document,
  Paragraph,
  Text,
  Image,
  Blockquote,
  CodeBlock,
  Link,
  Embed,
];

export default DefaultExtensions;
