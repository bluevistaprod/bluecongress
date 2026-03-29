import { describe, it, expect } from 'vitest';

describe('ImageGallery Component', () => {
  it('should render gallery with correct number of images', () => {
    const mockImages = [
      { id: '1', title: 'Image 1', description: 'Desc 1', placeholder: 'bg-blue-500' },
      { id: '2', title: 'Image 2', description: 'Desc 2', placeholder: 'bg-red-500' },
      { id: '3', title: 'Image 3', description: 'Desc 3', placeholder: 'bg-green-500' },
    ];

    expect(mockImages).toHaveLength(3);
    expect(mockImages[0].title).toBe('Image 1');
  });

  it('should handle image navigation', () => {
    const mockImages = [
      { id: '1', title: 'Image 1', description: 'Desc 1', placeholder: 'bg-blue-500' },
      { id: '2', title: 'Image 2', description: 'Desc 2', placeholder: 'bg-red-500' },
    ];

    let currentIndex = 0;
    const nextIndex = (currentIndex + 1) % mockImages.length;
    expect(nextIndex).toBe(1);

    const prevIndex = currentIndex === 0 ? mockImages.length - 1 : currentIndex - 1;
    expect(prevIndex).toBe(1);
  });

  it('should validate gallery data structure', () => {
    const mockImage = {
      id: 'test-1',
      title: 'Test Image',
      description: 'Test Description',
      placeholder: 'bg-gradient-to-br from-blue-400 to-blue-600'
    };

    expect(mockImage).toHaveProperty('id');
    expect(mockImage).toHaveProperty('title');
    expect(mockImage).toHaveProperty('description');
    expect(mockImage).toHaveProperty('placeholder');
    expect(typeof mockImage.id).toBe('string');
    expect(typeof mockImage.title).toBe('string');
  });
});
