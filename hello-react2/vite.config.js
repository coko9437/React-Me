import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Vue 등 다른 프레임워크는 바꿔주세요
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
plugins: [react()],
resolve: {
alias: {
'@': path.resolve(__dirname, 'src'), // @는 src/ 폴더로 연결
},
},
});