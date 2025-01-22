import Tabs from "./components/Tabs/Tabs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const tabs = new Tabs(app, [
  { label: "Tab 1", content: "Content 1" },
  { label: "Tab 2", content: "Content 2" },
  { label: "Tab 3", content: "Content 3" },
  { label: "Tab 4", content: "Content 4" },
  { label: "Tab 5", content: "Content 5" },
  { label: "Tab 6", content: "Content 6" },
  { label: "Tab 7", content: "Content 7" },
  { label: "Tab 8", content: "Content 8" },
  { label: "Tab 9", content: "Content 9" },
  { label: "Tab 10", content: "Content 10" },
  { label: "Tab 11", content: "Content 11" },
  { label: "Tab 12", content: "Content 12" },
  { label: "Tab 13", content: "Content 13" },
  { label: "Tab 14", content: "Content 14" },
  { label: "Tab 15", content: "Content 15" },
  { label: "Tab 16", content: "Content 16" },
  { label: "Tab 17", content: "Content 17" },
  { label: "Tab 18", content: "Content 18" },
  { label: "Tab 19", content: "Content 19" },
  { label: "Tab 20", content: "Content 20" },
]);
