# Shared

Types:

- <code><a href="./src/resources/shared.ts">TextComparator</a></code>
- <code><a href="./src/resources/shared.ts">TextExtractor</a></code>
- <code><a href="./src/resources/shared.ts">TextSummary</a></code>

# Capabilities

Methods:

- <code title="post /v1/capabilities/compare">client.capabilities.<a href="./src/resources/capabilities/capabilities.ts">compare</a>({ ...params }) -> TextComparator</code>
- <code title="post /v1/capabilities/extract">client.capabilities.<a href="./src/resources/capabilities/capabilities.ts">extract</a>({ ...params }) -> TextExtractor</code>
- <code title="post /v1/capabilities/summarize">client.capabilities.<a href="./src/resources/capabilities/capabilities.ts">summarize</a>({ ...params }) -> TextSummary</code>

## Media

Methods:

- <code title="post /v1/capabilities/compare/media">client.capabilities.media.<a href="./src/resources/capabilities/media.ts">compare</a>({ ...params }) -> TextComparator</code>
- <code title="post /v1/capabilities/extract/media">client.capabilities.media.<a href="./src/resources/capabilities/media.ts">extract</a>({ ...params }) -> TextExtractor</code>
- <code title="post /v1/capabilities/summarize/media">client.capabilities.media.<a href="./src/resources/capabilities/media.ts">summarize</a>({ ...params }) -> TextSummary</code>

# Models

## Embeddings

Types:

- <code><a href="./src/resources/models/embeddings.ts">Embeddings</a></code>

Methods:

- <code title="post /v1/models/embeddings">client.models.embeddings.<a href="./src/resources/models/embeddings.ts">create</a>({ ...params }) -> Embeddings</code>

## Rerank

# Kpu

Types:

- <code><a href="./src/resources/kpu.ts">KpuRunResponse</a></code>

Methods:

- <code title="post /v1/kpu/run">client.kpu.<a href="./src/resources/kpu.ts">run</a>({ ...params }) -> unknown</code>

# FileInterpreter

## FromPdf

Types:

- <code><a href="./src/resources/file-interpreter/from-pdf.ts">FromPdfCreateResponse</a></code>

Methods:

- <code title="post /v1/file-interpreter/from-pdf">client.fileInterpreter.fromPdf.<a href="./src/resources/file-interpreter/from-pdf.ts">create</a>({ ...params }) -> unknown</code>

## FromPdfScanned

## FromDocx

Types:

- <code><a href="./src/resources/file-interpreter/from-docx.ts">FromDocxCreateResponse</a></code>

Methods:

- <code title="post /v1/file-interpreter/from-docx">client.fileInterpreter.fromDocx.<a href="./src/resources/file-interpreter/from-docx.ts">create</a>({ ...params }) -> unknown</code>

## FromHTML

Types:

- <code><a href="./src/resources/file-interpreter/from-html.ts">FromHTMLCreateResponse</a></code>

Methods:

- <code title="post /v1/file-interpreter/from-html">client.fileInterpreter.fromHTML.<a href="./src/resources/file-interpreter/from-html.ts">create</a>({ ...params }) -> unknown</code>

## FromImage

Types:

- <code><a href="./src/resources/file-interpreter/from-image.ts">FromImageCreateResponse</a></code>

Methods:

- <code title="post /v1/file-interpreter/from-image">client.fileInterpreter.fromImage.<a href="./src/resources/file-interpreter/from-image.ts">create</a>({ ...params }) -> unknown</code>

## FromAudio

Types:

- <code><a href="./src/resources/file-interpreter/from-audio.ts">FromAudioCreateResponse</a></code>

Methods:

- <code title="post /v1/file-interpreter/from-audio">client.fileInterpreter.fromAudio.<a href="./src/resources/file-interpreter/from-audio.ts">create</a>({ ...params }) -> unknown</code>

# Mainet

## Search
