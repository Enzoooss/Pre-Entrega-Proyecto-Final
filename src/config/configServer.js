import * as url from 'url';
import open from 'open';

const config = {
  PORT: process.env.PORT ?? 8080,
  DIRNAME: url.fileURLToPath(new URL('..', import.meta.url)),
  
  get UPLOAD_DIR() { return `${this.DIRNAME}/public/img` },

 
  async openBrowser() {
    try {
      await open(`http://localhost:${this.PORT}`);
      console.log('Navegador abierto automáticamente.');
    } catch (error) {
      console.error('Error al abrir el navegador:', error);
    }
  }
};

export default config;
