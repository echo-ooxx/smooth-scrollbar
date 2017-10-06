import {
  TrackController,
} from './track';

import { Data2d } from './data-2d';

// Scrollbar.options
export type ScrollbarOptions = {
  damping: number,
  thumbMinSize: number,
  renderByPixels: boolean,
  alwaysShowTracks: boolean,
  continuousScrolling: boolean,
  plugins: any,
};

// Scrollbar.size
export type Metrics = {
  width: number,
  height: number,
};

export type ScrollbarSize = {
  container: Metrics,
  content: Metrics,
};

// Scrollbar.bounding
export type ScrollbarBounding = {
  top: number,
  right: number,
  bottom: number,
  left: number,
};

// Scrolling Listener
export type ScrollStatus = {
  offset: Data2d,
  limit: Data2d,
};

export interface ScrollListener {
  (this: Scrollbar, status: ScrollStatus): void;
}

// `scrollTo` options
export type ScrollToOptions = Partial<{
  callback: (this: Scrollbar) => void,
  easing: (percent: number) => number;
}>;

// `setPosition` options
export type SetPositionOptions = Partial<{
  withoutCallbacks: boolean,
}>;

// `scrollIntoView` options
export type ScrollIntoViewOptions = Partial<{
  alignToTop: boolean,
  onlyScrollIfNeeded: boolean,
  offsetTop: number,
  offsetLeft: number,
  offsetBottom: number,
}>;

// Scrollbar Class
export interface Scrollbar {
  readonly containerEl: HTMLElement;
  readonly contentEl: HTMLElement;

  readonly track: TrackController;

  readonly options: ScrollbarOptions;

  bounding: ScrollbarBounding;
  size: ScrollbarSize;

  offset: Data2d;
  limit: Data2d;

  scrollTop: number;
  scrollLeft: number;

  destroy(): void;

  update(): void;
  getSize(): ScrollbarSize;
  isVisible(elem: HTMLElement): boolean;

  addListener(fn: ScrollListener): void;
  removeListener(fn: ScrollListener): void;

  addMomentum(x: number, y: number, fromEvent: Event): void;
  setMomentum(x: number, y: number): void;

  scrollTo(x?: number, y?: number, duration?: number, options?: ScrollToOptions): void;
  setPosition(x?: number, y?: number, options?: SetPositionOptions): void;
  scrollIntoView(elem: HTMLElement, options?: ScrollIntoViewOptions): void;
}
