import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

// Mock API response
jest.mock('./api', () => ({
  fetchDesignData: jest.fn().mockResolvedValue({
    data: {
      id: '1',
      name: 'Sample Design',
      description: 'This is a sample design for testing.',
      images: ['image1.jpg', 'image2.jpg'],
    },
  }),
}));

describe('DesignArchitecture Component', () => {
  test('renders without crashing', async () => {
    render(<DesignArchitecture />);
    expect(await screen.findByText(/sample design/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchDesignData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({}), 2000))
    );
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('clicking on image should navigate to full view', async () => {
    render(<DesignArchitecture />);
    fireEvent.click(screen.getByAltText(/sample design/i));
    expect(window.location.href).toContain('/full-view');
  });

  test('keyboard navigation works for images', async () => {
    render(<DesignArchitecture />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.keyDown(firstImage, { key: 'ArrowRight' });
    await waitFor(() => expect(screen.getByAltText(/next image/i)).toBeInTheDocument());
  });

  test('accessibility features are properly implemented', async () => {
    render(<DesignArchitecture />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /navigate to full view/i);
    fireEvent.click(button);
    await waitFor(() => expect(window.location.href).toContain('/full-view'));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

// Mock API response
jest.mock('./api', () => ({
  fetchDesignData: jest.fn().mockResolvedValue({
    data: {
      id: '1',
      name: 'Sample Design',
      description: 'This is a sample design for testing.',
      images: ['image1.jpg', 'image2.jpg'],
    },
  }),
}));

describe('DesignArchitecture Component', () => {
  test('renders without crashing', async () => {
    render(<DesignArchitecture />);
    expect(await screen.findByText(/sample design/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchDesignData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({}), 2000))
    );
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('clicking on image should navigate to full view', async () => {
    render(<DesignArchitecture />);
    fireEvent.click(screen.getByAltText(/sample design/i));
    expect(window.location.href).toContain('/full-view');
  });

  test('keyboard navigation works for images', async () => {
    render(<DesignArchitecture />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.keyDown(firstImage, { key: 'ArrowRight' });
    await waitFor(() => expect(screen.getByAltText(/next image/i)).toBeInTheDocument());
  });

  test('accessibility features are properly implemented', async () => {
    render(<DesignArchitecture />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /navigate to full view/i);
    fireEvent.click(button);
    await waitFor(() => expect(window.location.href).toContain('/full-view'));
  });
});