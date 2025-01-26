// Define an interface for the row size objects
interface RowSize {
    threshold: number; // The threshold value
    size: string; // The size value (e.g., '10rem')
}

const defaultRowSize: string = '4rem';

// Create the rowSizes array with the RowSize type
const rowSizes: RowSize[] = [
    { threshold: 2900, size: '10rem' },
    { threshold: 2500, size: '9.5rem' },
    { threshold: 2000, size: '9rem' },
    { threshold: 1700, size: '8.5rem' },
    { threshold: 1400, size: '7.5rem' },
    { threshold: 1024, size: '6.5rem' },
    { threshold: 0, size: defaultRowSize }, // Default case
];

export const getRowSize = (width: number) => {
    for (const { threshold, size } of rowSizes) {
        if (width >= threshold) {
            return size;
        }
    }
    return defaultRowSize; // Fallback if no conditions are met
};

// Define an interface for the font size configuration
interface FontSizeConfig {
    minWidth: number; // Minimum width for scaling
    maxWidth: number; // Maximum width for scaling
    minSize: number; // Minimum font size in rem
    maxSize: number; // Maximum font size in rem
}

// Font size configurations for title, subtitle, and description
const titleFontSizeConfig: FontSizeConfig = {
    minWidth: 320,
    maxWidth: 1024,
    minSize: 1, // Minimum font size for title in rem
    maxSize: 2.5, // Maximum font size for title in rem
};

const subtitleFontSizeConfig: FontSizeConfig = {
    minWidth: 320,
    maxWidth: 1024,
    minSize: 1, // Minimum font size for subtitle in rem
    maxSize: 1.35, // Maximum font size for subtitle in rem
};

const descriptionFontSizeConfig: FontSizeConfig = {
    minWidth: 320,
    maxWidth: 1440,
    minSize: 0.655, // Minimum font size for description in rem
    maxSize: 0.875, // Maximum font size for description in rem
};

type FontType = 'title' | 'description' | 'subtitle';
// Function to calculate responsive font size in rem
const getResponsiveFontSize = (width: number, config: FontSizeConfig, type: FontType): string => {
    const { minWidth, maxWidth, minSize, maxSize } = config;
    let adjustment = type === 'description' ? 0.04 : type === 'subtitle' ? 0.15 : 0.1;
    if (width <= 1200) {
        adjustment = type === 'description' ? 0.01 : type === 'subtitle' ? 0.2 : 0.15;
    }
    // If the width is greater than maxWidth, return the maxSize
    if (width > maxWidth) {
        return `${maxSize - adjustment}rem`;
    }

    // Clamp the width between minWidth and maxWidth
    const clampedWidth = Math.max(minWidth, Math.min(width, maxWidth));

    // Calculate the font size based on the clamped width
    const fontSize = ((maxSize - minSize) / (maxWidth - minWidth)) * (maxWidth - clampedWidth) + minSize;

    return `${fontSize - adjustment}rem`; // Return the font size in rem
};

// Example usage
export const getTitleFontSize = (width: number): string => getResponsiveFontSize(width, titleFontSizeConfig, 'title');
export const getSubtitleFontSize = (width: number): string =>
    getResponsiveFontSize(width, subtitleFontSizeConfig, 'subtitle');
export const getDescriptionFontSize = (width: number): string =>
    getResponsiveFontSize(width, descriptionFontSizeConfig, 'description');
