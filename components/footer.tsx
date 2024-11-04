export default function Footer() {
  return (
    <footer>
      <div className="flex md:mt-20 mt-12 justify-center md:mb-6 mb-8">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors">
          <div className="flex gap-2">
            <p>Last Analysis:</p>
            <span className="text-[#2761D9]"> Nov 4, 2024</span>
          </div>
        </button>
      </div>
      <div className="flex justify-end md:mr-12 mr-6">
        <p className="text-gray-500 text-xs md:text-base">
          Developed by <span className="text-[#2761D9]">Utkarsh Kumar</span>
        </p>
      </div>
    </footer>
  );
}
