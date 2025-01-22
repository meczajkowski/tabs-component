import { type Tab } from "./types";
import { TabsClassNames } from "./enums";
import { validateTabIndex, validateConfig } from "./utils";
import "./Tabs.css";

/**
 * Represents a Tabs component.
 */
export default class Tabs {
  /**
   * The container element for the tabs.
   */
  private _container: HTMLDivElement;

  /**
   * The configuration for the tabs.
   */
  private _config: Tab[];

  /**
   * The index of the tab that is currently active.
   */
  private _activeTab: number;

  /**
   * Creates an instance of the Tabs component.
   *
   * @param container - The container element for the tabs.
   * @param config - The configuration for the tabs.
   * @param activeTab - The index of the tab to be initially active (default: 0).
   */
  constructor(container: HTMLDivElement, config: Tab[], activeTab?: number) {
    this._container = container;
    this._config = config;
    this._activeTab = activeTab ?? 0;
    this.render();
  }

  /**
   * Gets the container element for the tabs.
   *
   * @returns The container element.
   */
  public get container() {
    return this._container;
  }

  /**
   * Gets the configuration for the tabs.
   *
   * @returns The configuration object.
   */
  public get config() {
    return this._config;
  }

  /**
   * Gets the active tab.
   *
   * @returns The active tab index.
   */
  public get activeTab() {
    return this._activeTab;
  }

  public get tabCount(): number {
    return this._config.length;
  }

  /**
   * Sets the active tab by index.
   *
   * @param index - The index of the tab to set as active.
   * @throws {Error} if the index is out of bounds.
   * @throws {Error} if the index is not a number.
   * @returns void
   */
  public set activeTab(index: number) {
    validateTabIndex(index, this._config.length);
    this._activeTab = index;
    this.render();
  }

  /**
   * Adds a new tab to the Tabs component.
   * Optionally, sets the new tab as the active one.
   *
   * @param tab - The new tab configuration to be added.
   * @param setActive - Whether to set the newly added tab as active (default: false).
   * @returns void
   */
  public addTab(tab: Tab, setActive: boolean = false): void {
    this._config.push(tab);
    if (setActive) {
      this._activeTab = this._config.length - 1;
    }
    this.render();
  }

  /**
   * Removes a tab at the specified index.
   *
   * @param index - The index of the tab to remove.
   * @throws {Error} if the index is out of bounds.
   * @returns void
   */
  public removeTab(index: number): void {
    validateTabIndex(index, this._config.length);
    this._config.splice(index, 1);

    // Adjust active tab index if necessary

    // Adjust active tab index if necessary
    if (this._activeTab >= this._config.length) {
      this._activeTab = Math.max(0, this._config.length - 1);
    }
    this.render();
  }

  /**
   * Replaces the entire configuration of tabs.
   * Resets the active tab to the first one.
   *
   * @param newConfig - The new array of tab configurations.
   * @throws {Error} if the input is not an array.
   * @returns void
   */
  public set config(newConfig: Tab[]) {
    validateConfig(newConfig);
    this._config = [...newConfig];
    this._activeTab = 0;
    this.render();
  }

  /**
   * Retrieves the configuration of the currently active tab.
   *
   * @returns The active tab's configuration.
   */
  public getActiveTabConfig(): Tab {
    return this._config[this._activeTab];
  }

  /**
   * Updates the label of a specific tab.
   *
   * @param index - The index of the tab to update.
   * @param newLabel - The new label text.
   * @throws {Error} if the index is out of bounds.
   * @returns void
   */
  public updateTabLabel(index: number, newLabel: Tab["label"]): void {
    if (index < 0 || index >= this._config.length) {
      throw new Error("Index out of bounds");
    }
    this._config[index].label = newLabel;
    this.render();
  }

  /**
   * Updates the content of a specific tab.
   *
   * @param index - The index of the tab to update.
   * @param newContent - The new content for the tab.
   * @throws {Error} if the index is out of bounds.
   * @returns void
   */
  public updateTabContent(index: number, newContent: Tab["content"]): void {
    if (index < 0 || index >= this._config.length) {
      throw new Error("Index out of bounds");
    }
    this._config[index].content = newContent;
    this.render();
  }

  /**
   * Updates a specific tab.
   *
   * @param index - The index of the tab to update.
   * @param newTab - The new tab.
   * @throws {Error} if the index is out of bounds.
   * @returns void
   */
  public updateTab(index: number, newTab: Tab): void {
    if (index < 0 || index >= this._config.length) {
      throw new Error("Index out of bounds");
    }
    this._config[index] = { ...newTab };
    this.render();
  }

  /**
   * Handles the click event on a tab.
   * Does not create a new event listener.
   *
   * @param event - The click event.
   * @returns void
   */
  private _handleTabClick(event: Event): void {
    const target = event.target as HTMLElement;
    const tabButton = target.closest(".tabs__item") as HTMLButtonElement;
    if (tabButton) {
      const index = Array.from(
        tabButton.parentElement!.parentElement!.children
      ).findIndex((item) => item.contains(tabButton));
      this.activeTab = index;
    }
  }

  /**
   * Destroys the Tabs component.
   *
   * Removes all event listeners and clears the container.
   * @returns void
   */
  public destroy: () => void = () => {
    this._container.innerHTML = "";
  };

  /**
   * Renders the Tabs component inside the container.
   *
   * @throws An error if the container is not defined.
   * @throws An error if the config is not defined.
   * @returns void
   */
  private render: () => void = () => {
    if (!this._container) {
      throw new Error("Container is not defined");
    }

    if (!this._config) {
      throw new Error("Config is not defined");
    }

    this.destroy();
    this._container.innerHTML = `
      <section class="${TabsClassNames.CONTAINER}">
        <ul class="${TabsClassNames.LIST}">
          ${this._config
            .map(
              (tab, index) =>
                `<li><button class="${TabsClassNames.ITEM} ${
                  index === this._activeTab ? TabsClassNames.ITEM_ACTIVE : ""
                }">${tab.label}</button></li>`
            )
            .join("")}
        </ul>
        <article class="${TabsClassNames.CONTENT}">
          ${this._config[this._activeTab].content}
        </article>
      </section>
    `;

    this._container
      .querySelector(`.${TabsClassNames.LIST}`)
      ?.addEventListener("click", this._handleTabClick.bind(this));
  };
}
