declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth: boolean;
    }
  
    class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
    }
  
    export = LocomotiveScroll;
  }
  