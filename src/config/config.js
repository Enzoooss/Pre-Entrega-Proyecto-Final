import * as url from 'url';

const config = {
    DIRNAME: url.fileURLToPath(new URL('..', import.meta.url))
};

export default config;