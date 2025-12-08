import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    jest.mocked(useExternalData).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    const loader = await screen.findByRole('status');
    expect(loader).toBeInTheDocument();
  });

  test('renders error message if fetching data fails', async () => {
    jest.mocked(useExternalData).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    const errorMessage = await screen.findByText(/failed to fetch/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('handles user interaction with buttons correctly', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(jest.mocked(useExternalData)).toHaveBeenCalledWith(expect.any(Function));
  });

  test('validates form inputs and shows error messages for invalid entries', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

  test('ensures component is accessible and meets WCAG standards', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('mocks external API calls and handles responses correctly', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const response = jest.mocked(useExternalData);
    expect(response).toHaveBeenCalledWith(expect.any(Function));
  });

  test('handles edge cases such as empty data and no items available', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const message = screen.queryByText(/no items available/i);
    expect(message).toBeInTheDocument();
  });

  test('triggers appropriate actions when user navigates through pagination', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /next page/i }));
    expect(jest.mocked(useExternalData)).toHaveBeenCalledWith(expect.any(Function));
  });

  test('validates form inputs and shows error messages for invalid entries (alternative)', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    jest.mocked(useExternalData).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    const loader = await screen.findByRole('status');
    expect(loader).toBeInTheDocument();
  });

  test('renders error message if fetching data fails', async () => {
    jest.mocked(useExternalData).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    const errorMessage = await screen.findByText(/failed to fetch/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('handles user interaction with buttons correctly', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(jest.mocked(useExternalData)).toHaveBeenCalledWith(expect.any(Function));
  });

  test('validates form inputs and shows error messages for invalid entries', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

  test('ensures component is accessible and meets WCAG standards', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('mocks external API calls and handles responses correctly', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const response = jest.mocked(useExternalData);
    expect(response).toHaveBeenCalledWith(expect.any(Function));
  });

  test('handles edge cases such as empty data and no items available', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    const message = screen.queryByText(/no items available/i);
    expect(message).toBeInTheDocument();
  });

  test('triggers appropriate actions when user navigates through pagination', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /next page/i }));
    expect(jest.mocked(useExternalData)).toHaveBeenCalledWith(expect.any(Function));
  });

  test('validates form inputs and shows error messages for invalid entries (alternative)', () => {
    jest.mocked(useExternalData).mockReturnValue({ status: 'success', data: { items: [] } });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

});