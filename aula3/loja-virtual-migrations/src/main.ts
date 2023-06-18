
import { Api } from "./server"
import { api } from "./api-info";

const server = new Api();

const start = async (): Promise<void> => {
   try {

      server.bootstrap().then(() => {
         console.info(`API Empresa rodando na porta ${api.defaultPort}`);
      });

   } catch (error) {
      console.error('Server failed to start.');
      console.error(error);
      process.exit(1);
   }
};

void start();