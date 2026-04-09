import { spawnSync } from 'node:child_process';

const requiredEnvVars = ['TINA_CLIENT_ID', 'TINA_TOKEN'];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]?.trim());
const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';

if (missingEnvVars.length > 0) {
  console.log(
    `[tina] ${missingEnvVars.join(', ')} is not configured. Starting plain Astro dev server instead.`,
  );

  const astroDev = spawnSync(command, ['astro', 'dev'], {
    stdio: 'inherit',
  });

  if (astroDev.error) {
    throw astroDev.error;
  }

  process.exit(astroDev.status ?? 1);
}

const tinaDev = spawnSync(command, ['tinacms', 'dev', '-c', 'astro dev'], {
  stdio: 'inherit',
});

if (tinaDev.error) {
  throw tinaDev.error;
}

process.exit(tinaDev.status ?? 1);
