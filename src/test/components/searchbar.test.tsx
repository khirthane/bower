import SearchBar from '@/components/SearchBar';
import { fireEvent, render } from '@testing-library/react';

describe('SearchBar component', () => {
  it('renders the search input and button', () => {
    const mockOnSearch = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    expect(getByTestId('Search')).toBeTruthy();
    expect(getByTestId('Search Plugins')).toBeTruthy();
  });

  it('calls onSearch prop with query when form is submitted', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} isLoading={false} />);
    const input = getByTestId('Search Plugins');
    const button = getByTestId('Search');
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);
    expect(onSearchMock).toHaveBeenCalledWith('test query');
  });

  it('does not call onSearch prop when form is submitted with empty query', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} isLoading={false} />);
    const button = getByTestId('Search');
    fireEvent.click(button);
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
