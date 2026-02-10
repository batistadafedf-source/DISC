# Usar uma imagem do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor
CMD ["node", "backend_disc_api.js"]
