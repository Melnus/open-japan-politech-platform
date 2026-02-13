#!/bin/bash
# Copy Prisma engine binary + schema.prisma to app-local prisma/generated/
# so Prisma's runtime fallback (process.cwd() + "prisma/generated") finds them.
#
# On Vercel, __dirname resolves to the build-time path (/vercel/path0/...)
# which differs from the runtime path (/var/task/...). Prisma's fallback
# searches process.cwd() + "prisma/generated" — we place files there.
set -e

SRC="../../packages/db/prisma/generated"
DST="prisma/generated"

if [ ! -f "$SRC/libquery_engine-rhel-openssl-3.0.x.so.node" ]; then
  echo "⚠ Engine binary not found at $SRC (run prisma generate first)"
  exit 0
fi

mkdir -p "$DST"
cp "$SRC/libquery_engine-rhel-openssl-3.0.x.so.node" "$DST/"
cp "$SRC/schema.prisma" "$DST/"
echo "✓ Prisma engine + schema copied to $DST/"
