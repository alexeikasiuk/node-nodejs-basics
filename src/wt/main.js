import { resolve } from 'node:path';
import { Worker, workerData } from 'node:worker_threads';
import os from 'os';
import { setPath } from '../helper/setPath.js';

const workerPath = setPath(import.meta.url, './worker.js');
const CPUCores = os.cpus();
let number = 10;

const performCalculations = async () => {
  const workers = await Promise.allSettled(
    CPUCores.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData: number++ });

        worker.on('message', (message) => resolve(message));
        worker.on('error', (message) => reject(message));
      });
    })
  );

  const result = workers.map(({ status, value }) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: status === 'fulfilled' ? value : null,
    };
  });

  console.log(result);
};
await performCalculations();
