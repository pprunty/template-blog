'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  disableCloseOnClickOutside?: boolean;
  timedModal?: boolean;
  timeToClose?: number;
}

export default function SubscribeModal({
  isOpen,
  onClose,
  disableCloseOnClickOutside = false,
  timedModal = false,
  timeToClose = 5000,
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
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      firstFocusableElementRef.current?.focus();
    } else {
      previousActiveElementRef.current?.focus();
    }
  }, [isOpen]);

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmissionSuccess(true);
      if (timedModal) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
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
          border-[#333] dark:border-[#333333] border-[1px] p-6
          mx-4 w-full max-w-[320px]
          animate-scale-up shadow-lg rounded-lg
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Center-aligned Subtitle */}
        <h2 className="text-xl font-semibold mb-0 text-center text-gray-900 dark:text-gray-100 mt-4">
          Subscribe to my Newsletter
        </h2>

        {/* New Text Section */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center mt-2">
          Be the first to read my latest blogs.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4">
            {/* Input without Label */}
            <input
              ref={firstFocusableElementRef}
              type="email"
              id="email"
              className="px-2 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-theme-background dark:border-theme-border dark:text-theme-text"
              placeholder="Enter a valid email address..."
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
            <p className="text-green-500 text-xs mb-2">
              Thank you for subscribing!
            </p>
          ) : (
            <button
              type="submit"
              className="
                w-full
                px-4 py-2 text-sm
                bg-black text-white
                rounded-md hover:bg-gray-900
                transition-colors
                dark:bg-gray-800 dark:text-white
                dark:hover:bg-gray-700
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
