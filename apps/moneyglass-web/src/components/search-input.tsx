"use client";

import { useCallback, useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  defaultValue?: string;
}

export function SearchInput({
  placeholder = "検索...",
  onSearch,
  defaultValue = "",
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSearch(value);
    },
    [value, onSearch],
  );

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#6e7681] outline-none transition-colors focus:border-[rgba(255,107,53,0.4)] focus:ring-1 focus:ring-[rgba(255,107,53,0.2)]"
      />
      <button
        type="submit"
        className="rounded-lg border border-[rgba(255,107,53,0.3)] bg-[rgba(255,107,53,0.12)] px-5 py-2.5 text-sm font-medium text-[#FF6B35] transition-colors hover:bg-[rgba(255,107,53,0.2)]"
      >
        検索
      </button>
    </form>
  );
}
