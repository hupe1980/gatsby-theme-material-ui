import * as React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link } from '../link';

describe('link', () => {
  beforeEach(() => {
    // gatsby link unit tests crashed when globals are undefined
    (global as any).___loader = {
      enqueue: jest.fn(),
    };
  });

  it('should be rendered correctly', () => {
    const { asFragment } = render(<Link>Link</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('link with to', () => {
    const { asFragment } = render(<Link to="/page2">Link</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('link with href', () => {
    const { asFragment } = render(<Link href="http://example.org">Link</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('link with ref', () => {
    const { result } = renderHook(() => React.useRef<HTMLAnchorElement>(null));
    const anchorRef = result.current;
    const { asFragment } = render(<Link ref={anchorRef}>Link</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inside list', () => {
    const { asFragment } = render(
      <List>
        <ListItem button key={'key'} component={Link} to={'/page2'}>
          Item
        </ListItem>
      </List>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
