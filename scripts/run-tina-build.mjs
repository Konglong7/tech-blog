import { spawnSync } from 'node:child_process';

const requiredEnvVars = ['TINA_CLIENT_ID', 'TINA_TOKEN'];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]?.trim());

if (missingEnvVars.length > 0) {
  console.log(
    `[tina] Skipping Tina admin build because ${missingEnvVars.join(', ')} is not configured.`,
  );
  process.exit(0);
}

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(command, ['tinacms', 'build'], {
  stdio: 'inherit',
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
