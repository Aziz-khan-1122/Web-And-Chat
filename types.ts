
// Fix: Add global declaration for ion-icon to fix TypeScript errors.
// This ensures the type definition is available globally.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name: string;
        },
        HTMLElement
      >;
    }
  }
}

export interface Program {
  id: string;
  name: string;
  category: 'Undergraduate' | 'Graduate' | 'PhD';
  duration: string;
  description: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Campus' | 'Classrooms' | 'Labs' | 'Student Life';
}