import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageGalleryPreview from './ImageGalleryPreview';

const mockImages = [
  {
    id: '1',
    title: 'Écran 1',
    description: 'Description 1',
    image: 'https://example.com/image1.png',
    placeholder: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  {
    id: '2',
    title: 'Écran 2',
    description: 'Description 2',
    image: 'https://example.com/image2.png',
    placeholder: 'bg-gradient-to-br from-blue-400 to-pink-400',
  },
  {
    id: '3',
    title: 'Écran 3',
    description: 'Description 3',
    image: 'https://example.com/image3.png',
    placeholder: 'bg-gradient-to-br from-green-500 to-blue-500',
  },
  {
    id: '4',
    title: 'Écran 4',
    description: 'Description 4',
    image: 'https://example.com/image4.png',
    placeholder: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
];

describe('ImageGalleryPreview', () => {
  it('should render only maxImages images by default', () => {
    render(<ImageGalleryPreview images={mockImages} />);
    
    // Should display only 3 images by default
    expect(screen.getByText('Écran 1')).toBeDefined();
    expect(screen.getByText('Écran 2')).toBeDefined();
    expect(screen.getByText('Écran 3')).toBeDefined();
    expect(screen.queryByText('Écran 4')).toBeNull();
  });

  it('should respect custom maxImages prop', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={2} />);
    
    expect(screen.getByText('Écran 1')).toBeDefined();
    expect(screen.getByText('Écran 2')).toBeDefined();
    expect(screen.queryByText('Écran 3')).toBeNull();
  });

  it('should render title when provided', () => {
    render(<ImageGalleryPreview images={mockImages} title="Galerie Test" />);
    expect(screen.getByText('Galerie Test')).toBeDefined();
  });

  it('should open lightbox when image is clicked', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 4')).toBeDefined();
  });

  it('should close lightbox when close button is clicked', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 4')).toBeDefined();
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(screen.queryByText('1 / 4')).toBeNull();
  });

  it('should navigate to next image with next button', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 4')).toBeDefined();
    
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('2 / 4')).toBeDefined();
  });

  it('should navigate to previous image with previous button', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    const secondImageElements = screen.getAllByText('Écran 2');
    fireEvent.click(secondImageElements[0]);
    
    expect(screen.getByText('2 / 4')).toBeDefined();
    
    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);
    
    expect(screen.getByText('1 / 4')).toBeDefined();
  });

  it('should display descriptions for preview images', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    expect(screen.getByText('Description 1')).toBeDefined();
    expect(screen.getByText('Description 2')).toBeDefined();
    expect(screen.getByText('Description 3')).toBeDefined();
  });

  it('should handle single image gallery', () => {
    const singleImage = [mockImages[0]];
    render(<ImageGalleryPreview images={singleImage} />);
    
    expect(screen.getByText('Écran 1')).toBeDefined();
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    // Navigation buttons should not be present for single image
    expect(screen.queryByLabelText('Previous image')).toBeNull();
    expect(screen.queryByLabelText('Next image')).toBeNull();
  });

  it('should display correct image counter in lightbox', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    const thirdImageElements = screen.getAllByText('Écran 3');
    fireEvent.click(thirdImageElements[0]);
    
    expect(screen.getByText('3 / 4')).toBeDefined();
  });

  it('should render all preview images in grid', () => {
    render(<ImageGalleryPreview images={mockImages} maxImages={3} />);
    
    // Verify all 3 preview images are rendered
    const allTitles = screen.getAllByText(/Écran [123]/);
    expect(allTitles.length).toBeGreaterThanOrEqual(3);
  });
});
