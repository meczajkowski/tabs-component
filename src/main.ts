import Tabs from "./components/Tabs/Tabs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const tabs = new Tabs(app, [
  { label: "Tab 1", content: "Content 1" },
  { label: "Tab 2", content: "Content 2" },
  { label: "Tab 3", content: "Content 3" },
  { label: "Tab 4", content: "Content 4" },
  { label: "Tab 5", content: "Content 5" },
]);
