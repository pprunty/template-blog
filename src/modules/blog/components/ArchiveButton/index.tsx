import React from 'react';
import Link from 'next/link';
import { Archive } from 'lucide-react';

interface ArchiveButtonProps {
  label?: string; // Customize the button text (default: "VISIT ARCHIVE")
  route?: string; // Customize the route (default: `/archive`)
  position?: 'left' | 'right' | 'center'; // Determines the alignment
}

const ArchiveButton: React.FC<ArchiveButtonProps> = ({
  label = 'VISIT ARCHIVE', // Default label
  route = '/archive', // Default route
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
      <Link href={route} className="flex items-center text-center font-mono">
        <span className="flex items-center font-mono text-sm uppercase hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color] space-x-2">
          <Archive size={20} className="text-gray-600 dark:text-gray-300" />
          <span>{label}</span>
        </span>
      </Link>
    </div>
  );
};

export default ArchiveButton;
