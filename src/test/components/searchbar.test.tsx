import SearchBar from '@/components/SearchBar';
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';

const mockOnSearch = jest.fn();

describe('SearchBar component', () => {
  it('renders the search input and button', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar onSearch={mockOnSearch} isLoading={false} />,
    );

    const searchInput = getByPlaceholderText('Search...');
    const searchButton = getByText('Search');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('updates the query state on input change', () => {
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} isLoading={false} />,
    );

    const searchInput = getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'test query' } });

    expect(searchInput).toHaveValue('test query');
  });

  it('calls onSearch prop with query when form is submitted', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar onSearch={mockOnSearch} isLoading={false} />,
    );

    const searchInput = getByPlaceholderText('Search...');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('test');
    });
  });

  it('does not call onSearch prop when form is submitted with empty query', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} isLoading={false} />);
    const button = getByTestId('Search');
    fireEvent.click(button);
    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it('disables input and button when loading', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar onSearch={mockOnSearch} isLoading={true} />,
    );

    const searchInput = getByPlaceholderText('Search...');
    const searchButton = getByText('Search');

    expect(searchInput).toBeDisabled();
    expect(searchButton).toBeDisabled();
  });
});
