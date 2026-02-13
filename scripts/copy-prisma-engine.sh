#!/bin/bash
# Copy Prisma engine binary to .next/server/ for Vercel runtime
# Prisma searches .next/server/ at runtime, but pnpm stores the engine
# in a hashed path that Prisma can't discover automatically.
set -e
ENGINE=$(find ../../node_modules -name "libquery_engine-rhel-openssl-3.0.x.so.node" -path "*/.prisma/client/*" -print -quit 2>/dev/null || true)
if [ -n "$ENGINE" ] && [ -d ".next/server" ]; then
  cp "$ENGINE" .next/server/
  echo "✓ Prisma engine copied to .next/server/"
else
  echo "⚠ Prisma engine not found or .next/server missing (OK for non-Vercel builds)"
fi
