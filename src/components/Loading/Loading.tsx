export default function Loading() {
  return (
    <div className="grid grid-cols-12 gap-4 px-[52px]">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="col-span-3 flex flex-col gap-4 border p-3 rounded shadow animate-pulse"
        >
          <div className="w-full h-[304px] overflow-hidden bg-slate-300"></div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-4 bg-slate-300"></div>
            <div className="w-full h-4 bg-slate-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
