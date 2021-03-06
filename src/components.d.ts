/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { Signature as StSignature } from './components/st-signature/st-signature';

interface HTMLStSignatureElement extends StSignature, HTMLElement {
}
declare var HTMLStSignatureElement: {
  prototype: HTMLStSignatureElement;
  new (): HTMLStSignatureElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "st-signature": HTMLStSignatureElement;
  }
  interface ElementTagNameMap {
      "st-signature": HTMLStSignatureElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "st-signature": JSXElements.StSignatureAttributes;
      }
  }
  namespace JSXElements {
      export interface StSignatureAttributes extends HTMLAttributes {
        
          getSignatureImage?: any,
          label?: string,
          width?: number,
          height?: number,
          callback?: any
      }
  }
}

