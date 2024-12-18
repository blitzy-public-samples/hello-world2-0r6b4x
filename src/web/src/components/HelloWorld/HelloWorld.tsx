/**
 * @fileoverview HelloWorld Component
 * A React functional component that displays a centered Hello World message with
 * accessibility support and performance optimization through memoization.
 * 
 * @version 1.0.0
 * @requires React ^18.0.0
 * @requires styled-components ^5.3.0
 */

import React, { FC, memo } from 'react'; // ^18.0.0
import { HelloWorldProps } from './types';
import { Container, Text } from './styles';

/**
 * HelloWorld component displays a centered message with accessibility support
 * and performance optimization through React.memo.
 * 
 * @component
 * @param {HelloWorldProps} props - Component props containing the message to display
 * @returns {JSX.Element} Rendered component with centered, accessible message
 */
const HelloWorld: FC<HelloWorldProps> = memo(({ message }) => {
  /**
   * Render error boundary protection is provided at the app level
   * as specified in the technical requirements (Section 2.4.1)
   */
  return (
    <Container
      role="main"
      aria-label="Hello World Content"
    >
      <Text
        role="text"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </Text>
    </Container>
  );
});

// Display name for debugging and dev tools
HelloWorld.displayName = 'HelloWorld';

// Runtime prop type validation for development
if (process.env.NODE_ENV !== 'production') {
  HelloWorld.propTypes = {
    message: function(
      props: HelloWorldProps,
      propName: keyof HelloWorldProps,
      componentName: string
    ) {
      if (!props.message || typeof props.message !== 'string') {
        return new Error(
          `Invalid prop '${propName}' supplied to '${componentName}'. ` +
          `Expected a non-empty string, got '${props.message}'`
        );
      }
    }
  };
}

export default HelloWorld;