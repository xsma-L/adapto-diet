-- CreateTable
CREATE TABLE "Informations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "objectif_principal" TEXT NOT NULL,
    "objectifs_specifiques" TEXT NOT NULL,
    "niveau_activite_quotidienne" TEXT NOT NULL,
    "exercices_reguliers" TEXT NOT NULL,
    "nature_activites" TEXT NOT NULL,
    "frequence_activites" TEXT NOT NULL,
    "duree_activites" TEXT NOT NULL,
    "habitudes_alimentaires_particulieres" TEXT NOT NULL,
    "aliments_evites" TEXT NOT NULL,
    "habitudes_alimentaires" TEXT NOT NULL,
    "allergies_intolerances" TEXT NOT NULL,
    "aliments_preferes" TEXT NOT NULL,
    "poids_actuel" INTEGER NOT NULL,
    "taille" INTEGER NOT NULL,
    "pourcentage_graisse_corporelle" TEXT NOT NULL,
    "conditions_medicales" TEXT NOT NULL,
    "repas_par_jour" INTEGER NOT NULL,
    "preferences_temps_repas" TEXT NOT NULL,
    "objectifs_nutritionnels" TEXT NOT NULL,
    "autres_considerations" TEXT NOT NULL,

    CONSTRAINT "Informations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Informations_userId_key" ON "Informations"("userId");

-- AddForeignKey
ALTER TABLE "Informations" ADD CONSTRAINT "Informations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
