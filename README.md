# Tabs Component

A modern, lightweight, and customizable tabs component built with TypeScript and Vite. This component provides an easy way to create tabbed interfaces in your web applications.

Live: https://meczajkowski-tabs-component.netlify.app/

![image](https://github.com/user-attachments/assets/bc5e6534-55fc-4ebf-941f-46632d21b879)

## Features

- 🚀 Built with TypeScript for type safety
- 🎨 Customizable styling with CSS
- 📱 Responsive design
- ⚡ Powered by Vite for fast development
- 🔄 Dynamic tab content loading
- 🎯 Easy to integrate

## Usage

```typescript
import { Tabs } from "./components/Tabs/Tabs";

// Initialize tabs
const tabs = new Tabs({
  container: document.querySelector("#tabs-container"),
  // Add your configuration options here
});
```

## Project Structure

```
src/
├── components/
│   └── Tabs/
│       ├── Tabs.ts         # Main component logic
│       ├── Tabs.css        # Component styles
│       ├── types.ts        # TypeScript interfaces
│       ├── enums.ts        # Enums for tab states
│       ├── utils.ts        # Utility functions
│       └── eventHandlers.ts # Event handling logic
├── main.ts                 # Entry point
└── style.css              # Global styles
```

## Technologies Used

- TypeScript
- Vite
- CSS

## API Reference

### Constructor

```typescript
new Tabs(container: HTMLDivElement, config: Tab[], activeTab?: number)
```

### Methods

- `addTab(tab: Tab, setActive?: boolean)`: Add a new tab
- `removeTab(index: number)`: Remove a tab at specified index
- `updateTab(index: number, newTab: Tab)`: Update entire tab configuration
- `updateTabLabel(index: number, newLabel: string)`: Update tab label
- `updateTabContent(index: number, newContent: string)`: Update tab content
- `destroy()`: Clean up the component

### Properties

- `activeTab`: Get/Set the current active tab index
- `config`: Get/Set the entire tab configuration
- `tabCount`: Get the total number of tabs
- `container`: Get the container element

## Configuration

Each tab is configured using the Tab interface:

```typescript
interface Tab {
  label: string; // The text shown on the tab
  content: string; // The content shown when tab is active
}
```

## Styling

The component comes with default styling but can be customized by overriding CSS classes:

- `.tabs`: Main container
- `.tabs__list`: Tab list container
- `.tabs__item`: Individual tab button
- `.tabs__item--active`: Active tab state
- `.tabs__content`: Content container

## Examples

### Dynamic Tab Management

```typescript
// Add a new tab
tabs.addTab({ label: "New Tab", content: "New Content" }, true);

// Remove the second tab
tabs.removeTab(1);

// Update tab content
tabs.updateTabContent(0, "Updated content");
```
