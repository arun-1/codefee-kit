import React, { ImgHTMLAttributes } from 'react';
export interface ImageViewerProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}
declare const ImageViewer: React.ForwardRefExoticComponent<ImageViewerProps & React.RefAttributes<HTMLDivElement>>;
export default ImageViewer;
