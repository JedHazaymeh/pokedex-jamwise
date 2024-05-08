import { join } from 'https://deno.land/std@0.223.0/path/mod.ts'
import postcss from 'https://esm.sh/postcss@8.4.38'
import tailwindcss from 'https://esm.sh/tailwindcss@3.4.3'
import autoprefixer from 'https://esm.sh/autoprefixer@10.4.19'

const tailwindConfig = {
  content: ["./src/**/*.{html,md,liquid}"],
}

export const afterHook = async ({ config }) => {
  const filename = 'styles.css'
  const inputPath = join(config.input, filename)
  const outputPath = join(config.output, filename)
  console.debug(`Post-processing ${inputPath} -> ${outputPath}`)

  const processor = postcss([tailwindcss(tailwindConfig), autoprefixer])
  const result = await processor.process(Deno.readTextFileSync(inputPath), {
    from: inputPath,
    to: outputPath,
  })

  Deno.writeTextFileSync(outputPath, result.css)
}