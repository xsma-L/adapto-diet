-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Informations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "objectif_principal" TEXT NOT NULL,
    "objectifs_specifiques" JSONB NOT NULL,
    "niveau_activite_quotidienne" TEXT NOT NULL,
    "exercices_reguliers" JSONB NOT NULL,
    "nature_activites" JSONB NOT NULL,
    "frequence_activites" TEXT NOT NULL,
    "duree_activites" TEXT NOT NULL,
    "regime_alimentaire_actuel" TEXT NOT NULL,
    "habitudes_alimentaires_particulieres" JSONB NOT NULL,
    "aliments_evites" JSONB NOT NULL,
    "allergies_intolerances" JSONB NOT NULL,
    "poids_actuel" INTEGER NOT NULL,
    "taille" INTEGER NOT NULL,
    "pourcentage_graisse_corporelle" TEXT NOT NULL,
    "conditions_medicales" JSONB NOT NULL,
    "repas_par_jour" INTEGER NOT NULL,
    "preferences_temps_repas" JSONB NOT NULL,
    "objectifs_nutritionnels" JSONB NOT NULL,
    "autres_considerations" JSONB NOT NULL,

    CONSTRAINT "Informations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Informations_userId_key" ON "Informations"("userId");

-- AddForeignKey
ALTER TABLE "Informations" ADD CONSTRAINT "Informations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
