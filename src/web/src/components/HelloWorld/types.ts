/**
 * @fileoverview Type definitions for the HelloWorld component
 * Defines the props interface for the HelloWorld component ensuring type safety
 * and proper typing of the message property.
 * 
 * @version 1.0.0
 */

/**
 * Interface defining the required props for the HelloWorld component.
 * Ensures type safety for the message property that will be displayed.
 * 
 * @interface HelloWorldProps
 * @property {string} message - The text message to be displayed by the component
 */
export interface HelloWorldProps {
    message: string;
}