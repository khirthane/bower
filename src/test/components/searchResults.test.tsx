import SearchResults from '@/components/SearchResults';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('SearchResults component', () => {
  it('renders the list of plugins', () => {
    const plugins = [
      {
        name: 'Plugin 1',
        description: 'Description 1',
        latest_release_number: '1.0.0',
        latest_release_published_at: '2022-02-01',
        stars: 100,
      },
      {
        name: 'Plugin 2',
        description: 'Description 2',
        latest_release_number: '2.0.0',
        latest_release_published_at: '2022-02-02',
        stars: 200,
      },
    ];

    const { getByText } = render(<SearchResults plugins={plugins} />);

    expect(getByText('Plugin 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('100 Stars')).toBeInTheDocument();

    expect(getByText('Plugin 2')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
    expect(getByText('200 Stars')).toBeInTheDocument();
  });
});
