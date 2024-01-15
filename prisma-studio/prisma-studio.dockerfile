FROM node:18

# Définissez le répertoire de travail
WORKDIR /app

# Installez Prisma CLI de manière globale
RUN npm install -g prisma


# Démarrez Prisma Studio
CMD ["npx", "prisma", "studio"]
