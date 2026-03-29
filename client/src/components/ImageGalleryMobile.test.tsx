import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageGalleryMobile from './ImageGalleryMobile';

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
];

describe('ImageGalleryMobile', () => {
  it('should render gallery with all images', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    mockImages.forEach((image) => {
      expect(screen.getByText(image.title)).toBeDefined();
      expect(screen.getByText(image.description)).toBeDefined();
    });
  });

  it('should render title when provided', () => {
    render(<ImageGalleryMobile images={mockImages} title="Galerie Test" />);
    expect(screen.getByText('Galerie Test')).toBeDefined();
  });

  it('should open lightbox when image is clicked', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 3')).toBeDefined();
  });

  it('should close lightbox when close button is clicked', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 3')).toBeDefined();
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(screen.queryByText('1 / 3')).toBeNull();
  });

  it('should navigate to next image with next button', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    expect(screen.getByText('1 / 3')).toBeDefined();
    
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('2 / 3')).toBeDefined();
  });

  it('should navigate to previous image with previous button', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    const secondImageElements = screen.getAllByText('Écran 2');
    fireEvent.click(secondImageElements[0]);
    
    expect(screen.getByText('2 / 3')).toBeDefined();
    
    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);
    
    expect(screen.getByText('1 / 3')).toBeDefined();
  });

  it('should handle single image gallery', () => {
    const singleImage = [mockImages[0]];
    render(<ImageGalleryMobile images={singleImage} />);
    
    expect(screen.getByText('Écran 1')).toBeDefined();
    
    const firstImageElements = screen.getAllByText('Écran 1');
    fireEvent.click(firstImageElements[0]);
    
    // Navigation buttons should not be present for single image
    expect(screen.queryByLabelText('Previous image')).toBeNull();
    expect(screen.queryByLabelText('Next image')).toBeNull();
  });

  it('should display image counter in lightbox', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    const secondImageElements = screen.getAllByText('Écran 2');
    fireEvent.click(secondImageElements[0]);
    
    expect(screen.getByText('2 / 3')).toBeDefined();
  });

  it('should render all images in carousel', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    // Verify all images are rendered in the carousel
    const allTitles = screen.getAllByText(/Écran [123]/);
    expect(allTitles.length).toBeGreaterThanOrEqual(mockImages.length);
  });

  it('should display descriptions for each image', () => {
    render(<ImageGalleryMobile images={mockImages} />);
    
    mockImages.forEach((image) => {
      expect(screen.getByText(image.description)).toBeDefined();
    });
  });
});
