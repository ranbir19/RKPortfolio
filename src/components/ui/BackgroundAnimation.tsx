import React from "react";

const BackgroundAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
    >
      <div className="absolute top-0 left-0 w-full h-full">
  {/* Animated gradient blobs with higher opacity and blur */}
  <div className="absolute left-1/4 top-1/4 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-50 rounded-full blur-[120px] animate-blob1" />
  <div className="absolute right-1/4 top-1/2 w-[22rem] h-[22rem] bg-gradient-to-tr from-green-400 via-blue-400 to-purple-400 opacity-50 rounded-full blur-[100px] animate-blob2" />
  <div className="absolute left-1/2 bottom-0 w-[20rem] h-[20rem] bg-gradient-to-tr from-yellow-400 via-pink-400 to-red-400 opacity-50 rounded-full blur-[100px] animate-blob3" />
      </div>
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(60px) scale(1.05); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(50px) scale(0.95); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 16s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
