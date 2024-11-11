import React from "react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div className="relative p-8 w-11/12 max-w-md bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg overflow-hidden text-white">
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* "Coming Soon" Badge */}
          <span className="px-4 py-1 text-sm font-semibold text-yellow-500 bg-yellow-100 bg-opacity-80 rounded-full uppercase">
            Coming Soon
          </span>

          {/* Heading */}
          <h2 className="text-2xl font-bold">Parent App Extension</h2>

          {/* Description */}
          <p className="text-center text-white text-opacity-90">
            An app extension that empowers parents to detect and monitor their
            child's online activities, ensuring a safer digital experience.
            Installable on any device, this standalone tool offers real-time
            content moderation and activity insights for peace of mind.
          </p>

          {/* Feature Unavailable Badge */}
          <span className="mt-4 px-3 py-1 text-xs font-semibold text-white bg-gray-800 bg-opacity-70 rounded-lg">
            Feature Not Yet Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
