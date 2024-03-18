// Module options TypeScript interface definition
export interface ModuleOptions {
  pixelId?: string | null;
  track?: string;
  autoPageView?: boolean;
  version?: string;
  pixels?: Pixel[];
  manualMode?: boolean;
  disabled?: boolean;
  debug?: boolean;
  dev?: boolean;
}

export interface Pixel {
  pixelId: string
  routes: string[]
}