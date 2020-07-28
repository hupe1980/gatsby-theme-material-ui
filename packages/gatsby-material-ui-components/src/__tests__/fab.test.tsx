import * as React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Fab } from '../fab';

describe('fab', () => {
  beforeEach(() => {
    // gatsby link unit tests crashed when globals are undefined
    (global as any).___loader = {
      enqueue: jest.fn(),
    };
  });

  it('should be rendered correctly', () => {
    const { asFragment } = render(<Fab>text</Fab>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('lbutton with to', () => {
    const { asFragment } = render(<Fab to="/page2">text</Fab>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('button with ref', () => {
    const { result } = renderHook(() => React.useRef<HTMLButtonElement>(null));
    const buttonRef = result.current;
    const { asFragment } = render(<Fab ref={buttonRef}>text</Fab>);
    expect(asFragment()).toMatchSnapshot();
  });
});
