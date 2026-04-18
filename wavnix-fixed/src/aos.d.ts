declare module 'aos' {
  interface AosOptions {
    duration?: number;
    offset?: number;
    delay?: number;
    once?: boolean;
    easing?: string;
    [key: string]: any;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: Aos;
  export = aos;
}
