import { experimental_use as use } from 'react';
import muxBlurHash from "@mux/blurhash";

async function fetchData() {
  const { blurHashBase64 } = await muxBlurHash('FuJSYrK0014ec2LPnm11bzC2MAySAQPqA')
  return blurHashBase64;
}

export default function DataView() {
  const blurhash = use(fetchData());

  return <div>{blurhash}</div>;
}
