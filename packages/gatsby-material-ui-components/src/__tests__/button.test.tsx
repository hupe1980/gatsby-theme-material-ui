import * as React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../button';

describe('button', () => {
  beforeEach(() => {
    // gatsby link unit tests crashed when globals are undefined
    (global as any).___loader = {
      enqueue: jest.fn(),
    };
  });

  it('should be rendered correctly', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('lbutton with to', () => {
    const { asFragment } = render(<Button to="/page2" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('button with ref', () => {
    const { result } = renderHook(() => React.useRef<HTMLButtonElement>(null));
    const buttonRef = result.current;
    const { asFragment } = render(<Button ref={buttonRef} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
