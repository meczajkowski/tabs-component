import { Tab } from "./types";

/**
 * Validates tab index bounds
 * @param index - The index to validate
 * @param length - The length of the tabs array
 * @throws {Error} if the index is out of bounds
 * @returns void
 */
export const validateTabIndex = (index: number, length: number): void => {
  if (typeof index !== "number") {
    throw new Error("Index must be a number");
  }

  if (index < 0 || index >= length) {
    throw new Error("Index out of bounds");
  }
};

/**
 * Validates tab configuration
 * @param config - The configuration to validate
 * @throws {Error} if the config is invalid
 */
export const validateConfig = (config: Tab[]): void => {
  if (!Array.isArray(config) || config.length === 0) {
    throw new Error("Config must be a non-empty array");
  }
};
