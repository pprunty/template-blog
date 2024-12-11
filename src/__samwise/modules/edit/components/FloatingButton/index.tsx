// src/modules/edit/components/FloatingButton.tsx
import React from 'react';
import TooltipWrapper from '@/modules/common/components/Tooltip';
import { Edit, Trash2, Eye, Settings, FilePlus, Save } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
  type:
    | 'edit-blog'
    | 'edit-post'
    | 'delete-post'
    | 'create-post'
    | 'toggle-edit-mode';
  isEditMode?: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  type,
  isEditMode,
}) => {
  // Do not render the button in production environments
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const ariaLabel =
    type === 'edit-blog'
      ? 'Configure Blog'
      : type === 'edit-post'
        ? 'Configure Post'
        : type === 'delete-post'
          ? 'Delete Post'
          : type === 'create-post'
            ? 'Create New Post'
            : type === 'toggle-edit-mode'
              ? isEditMode
                ? 'Preview Post'
                : 'Edit Post'
              : '';

  const IconComponent =
    type === 'delete-post'
      ? Trash2
      : type === 'create-post'
        ? FilePlus
        : type === 'toggle-edit-mode'
          ? isEditMode
            ? Eye
            : Edit
          : Settings;

  return (
    <TooltipWrapper message={ariaLabel} position="left">
      <button
        onClick={onClick}
        className={`text-white p-2`}
        aria-label={ariaLabel}
      >
        <IconComponent size={16} className="text-current" />
      </button>
    </TooltipWrapper>
  );
};

export default FloatingButton;
