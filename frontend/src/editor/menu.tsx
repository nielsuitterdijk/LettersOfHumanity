import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../components/ui/menubar";
import { Toggle } from "../components/ui/toggle";

enum Style {
  Normal = "Normal",
  Header1 = "Header h1",
}

const TextStyleMenu: React.FC = () => {
  const [textStyle, setTextStyle] = useState<Style>(Style.Normal);

  // Get the values of the enum
  const styleValues = Object.values(Style);

  return (
    <MenubarMenu>
      <MenubarTrigger>{textStyle}</MenubarTrigger>
      <MenubarContent>
        {styleValues.map((styleValue) => (
          <MenubarItem
            key={styleValue}
            onClick={() => setTextStyle(styleValue)}
          >
            {styleValue}
          </MenubarItem>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default function EditorMenu() {
  return (
    <Menubar>
      <TextStyleMenu />
      <Toggle>
        <FontBoldIcon />
      </Toggle>
      <Toggle>
        <FontItalicIcon />
      </Toggle>
      <Toggle>
        <UnderlineIcon />
      </Toggle>
    </Menubar>
  );
}
