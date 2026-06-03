/// <reference types="vite/client" />

declare module '@fontsource-variable/*';

declare module '*.webp' {
  const src: string;
  export default src;
}