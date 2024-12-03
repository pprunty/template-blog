import React from 'react';
import Link from 'next/link';

interface NavigationButtonProps {
  label?: string; // Allow customization of button text
  route?: string; // Allow customization of the route (default: `/`)
  position?: 'left' | 'right' | 'center'; // Determines the alignment
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label = '', // Default label
  route = '/', // Default route
  position = 'center', // Default position
}) => {
  const positionClass =
    position === 'left'
      ? 'justify-start'
      : position === 'right'
        ? 'justify-end'
        : 'justify-center';

  return (
    <div className={`flex ${positionClass} items-center`}>
      <Link
        href={route}
        className="flex flex-col items-center text-center font-mono"
      >
        <span className="font-mono text-sm uppercase hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default NavigationButton;
