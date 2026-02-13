"use client";

export default function ErrorPage({
  error: err,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h2 className="mb-3 text-2xl font-bold text-white">エラーが発生しました</h2>
        <p className="mb-6 text-[#8b949e]">{err.message || "予期しないエラーです"}</p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-[rgba(255,107,53,0.3)] bg-[rgba(255,107,53,0.1)] px-6 py-2.5 text-sm font-medium text-[#FF6B35] transition-colors hover:bg-[rgba(255,107,53,0.2)]"
        >
          再試行
        </button>
      </div>
    </div>
  );
}
