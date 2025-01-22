import Tabs from "./components/Tabs/Tabs";
import "./style.css";

// Initialize tabs with demo content
const tabsDemo = new Tabs(
  document.querySelector("#tabs-demo") as HTMLDivElement,
  [
    {
      label: "Basic Usage",
      content: `
        <div>
          <h3>Getting Started</h3>
          <pre><code>
import Tabs from './components/Tabs/Tabs';

const tabs = new Tabs(
  document.querySelector('#my-tabs'),
  [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' }
  ]
);
          </code></pre>
        </div>
      `,
    },
    {
      label: "Customization",
      content: `
        <div>
          <h3>Styling Options</h3>
          <p>The component can be easily styled using CSS variables and classes:</p>
          <ul style="margin: 1rem 0 1rem 1.5rem">
            <li>Override default styles using CSS classes</li>
            <li>Responsive design out of the box</li>
            <li>Customizable animations and transitions</li>
          </ul>
        </div>
      `,
    },
    {
      label: "API Reference",
      content: `
        <div>
          <h3>Available Methods</h3>
          <ul style="margin: 1rem 0 1rem 1.5rem">
            <li><strong>addTab(tab: Tab, setActive?: boolean)</strong>: Add a new tab</li>
            <li><strong>removeTab(index: number)</strong>: Remove a tab</li>
            <li><strong>updateTab(index: number, newTab: Tab)</strong>: Update tab configuration</li>
            <li><strong>updateTabLabel(index: number, newLabel: string)</strong>: Update tab label</li> 
            <li><strong>updateTabContent(index: number, newContent: string)</strong>: Update tab content</li>
            <li><strong>destroy()</strong>: Clean up the component</li>
          </ul>
        </div>
      `,
    },
  ]
);
