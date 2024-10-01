// components/SubscribeModal.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  disableCloseOnClickOutside?: boolean;
  timedModal?: boolean;
  timeToClose?: number;
  title?: string;
}

export default function SubscribeModal({
  isOpen,
  onClose,
  disableCloseOnClickOutside = false,
  timedModal = false,
  timeToClose = 5000,
  title = 'Subscribe to our Newsletter',
}: SubscribeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLInputElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Save the element that was focused before the modal was opened
      previousActiveElementRef.current = document.activeElement as HTMLElement;

      // Focus the first focusable element in the modal
      firstFocusableElementRef.current?.focus();
    } else {
      // Return focus to the previously focused element
      previousActiveElementRef.current?.focus();
    }
  }, [isOpen]);

  // Timed modal functionality
  useEffect(() => {
    let timedCloseTimeout: NodeJS.Timeout | null = null;

    if (isOpen && timedModal) {
      timedCloseTimeout = setTimeout(() => {
        onClose();
      }, timeToClose);
    }

    return () => {
      if (timedCloseTimeout) {
        clearTimeout(timedCloseTimeout);
      }
    };
  }, [isOpen, timedModal, timeToClose, onClose]);

  // Close the modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !disableCloseOnClickOutside
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, disableCloseOnClickOutside]);

  // Close the modal when pressing the Escape key and handle focus trapping
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        // Handle focus trapping
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'input, button, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionError('');
    setSubmissionSuccess(false);

    // Simulate API call
    try {
      // Replace this with your API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmissionSuccess(true);

      // If timedModal, close the modal after a short delay
      if (timedModal) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
      }
    catch (error) {
      console.error('Subscription error:', error); // Log the error
      setSubmissionError('An error occurred. Please try again.');

    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black bg-opacity-50
        overflow-y-auto
        animate-fade-in
      "
      role="dialog"
      aria-modal="true"
      onClick={!disableCloseOnClickOutside ? onClose : undefined}
    >
      <div
        ref={modalRef}
        className="
          relative bg-[#fcfcfc] dark:bg-[#000]
          border-[#333] dark:border-[#fcfcfc] border
          p-6 mx-4 w-full max-w-md
          animate-slide-up shadow-lg
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h2 className="text-xl font-semibold mb-0 text-gray-900 dark:text-gray-100">
              {title}
            </h2>
          )}
          {!disableCloseOnClickOutside && (
            <button
              onClick={onClose}
              className="
                text-gray-500 hover:text-gray-700
                dark:text-gray-400 dark:hover:text-gray-300
                focus:outline-none
              "
              aria-label="Close"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              ref={firstFocusableElementRef}
              type="email"
              id="email"
              className="
                block w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring focus:ring-blue-200
                dark:bg-gray-700 dark:border-gray-600 dark:text-white
              "
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || submissionSuccess}
            />
          </div>

          {submissionError && (
            <p className="text-red-500 text-sm mb-2">{submissionError}</p>
          )}

          {submissionSuccess ? (
            <p className="text-green-500 text-sm mb-2">
              Thank you for subscribing!
            </p>
          ) : (
            <button
              type="submit"
              className="
                w-full px-4 py-2 bg-blue-600 text-white rounded-md
                hover:bg-blue-700 transition-colors
                disabled:bg-gray-400 disabled:cursor-not-allowed
              "
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
