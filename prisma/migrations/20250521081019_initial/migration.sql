-- CreateEnum
CREATE TYPE "TypeActe" AS ENUM ('Naissance', 'Mariage', 'Décès');

-- CreateEnum
CREATE TYPE "DemandePourTier" AS ENUM ('Moi', 'MonEnfant', 'UnMenbreFamile', 'Autre');

-- CreateEnum
CREATE TYPE "StatutDemande" AS ENUM ('SoumiseEnAttenteDePaiment', 'SoumisePayee', 'EnTraitement', 'Validée', 'Refusée', 'Livrée');

-- CreateEnum
CREATE TYPE "ModePaiement" AS ENUM ('Mobile_Money', 'Carte_Bancaire', 'Virement');

-- CreateEnum
CREATE TYPE "RoleAgent" AS ENUM ('Agent', 'Administrateur');

-- CreateEnum
CREATE TYPE "TypeEntite" AS ENUM ('Demande', 'Acte');

-- CreateTable
CREATE TABLE "Citoyen" (
    "ID_Citoyen" TEXT NOT NULL,
    "Nom" TEXT NOT NULL,
    "Prenom" TEXT NOT NULL,
    "DateNaissance" TIMESTAMP(3) NOT NULL,
    "LieuNaissance" TEXT NOT NULL,
    "Adresse" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Telephone" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Citoyen_pkey" PRIMARY KEY ("ID_Citoyen")
);

-- CreateTable
CREATE TABLE "Demande" (
    "ID_Demande" TEXT NOT NULL,
    "ID_Citoyen" TEXT NOT NULL,
    "TypeActe" "TypeActe" NOT NULL,
    "NumeroActe" TEXT NOT NULL DEFAULT '',
    "Nom" TEXT NOT NULL DEFAULT '',
    "Prenom" TEXT NOT NULL DEFAULT '',
    "Statut" "StatutDemande" NOT NULL,
    "DemandePourTier" "DemandePourTier" NOT NULL,
    "DateDemande" TIMESTAMP(3) NOT NULL,
    "DateActe" TIMESTAMP(3),
    "ID_Paiement" TEXT,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("ID_Demande")
);

-- CreateTable
CREATE TABLE "Document_Acte" (
    "ID_Document_Acte" TEXT NOT NULL,
    "ID_Demande" TEXT NOT NULL,
    "ID_Agent" TEXT NOT NULL,
    "DateDelivrance" TIMESTAMP(3) NOT NULL,
    "Fichier_PDF" TEXT NOT NULL,
    "SignatureNumerique" TEXT NOT NULL,
    "EstArchive" BOOLEAN NOT NULL,
    "DateArchivage" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_Acte_pkey" PRIMARY KEY ("ID_Document_Acte")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "ID_Paiement" TEXT NOT NULL,
    "Montant" DECIMAL(65,30) NOT NULL,
    "ModePaiement" "ModePaiement" NOT NULL,
    "DatePaiement" TIMESTAMP(3) NOT NULL,
    "Transaction_ID" TEXT NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("ID_Paiement")
);

-- CreateTable
CREATE TABLE "Agent" (
    "ID_Agent" TEXT NOT NULL,
    "Nom" TEXT NOT NULL,
    "Prenom" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Role" "RoleAgent" NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("ID_Agent")
);

-- CreateTable
CREATE TABLE "Historique_Modifications" (
    "ID_Historique" TEXT NOT NULL,
    "TypeEntite" "TypeEntite" NOT NULL,
    "ID_Entite" TEXT NOT NULL,
    "ID_Agent" TEXT NOT NULL,
    "Action" TEXT NOT NULL,
    "DateModification" TIMESTAMP(3) NOT NULL,
    "Ancienne_Valeur" TEXT NOT NULL,
    "Nouvelle_Valeur" TEXT NOT NULL,

    CONSTRAINT "Historique_Modifications_pkey" PRIMARY KEY ("ID_Historique")
);

-- CreateTable
CREATE TABLE "FraisTimbre" (
    "ID_FraisTimbre" SERIAL NOT NULL,
    "TypeActe" "TypeActe" NOT NULL,
    "PrixTimbre" DOUBLE PRECISION NOT NULL,
    "FraisDossier" DOUBLE PRECISION DEFAULT 0,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FraisTimbre_pkey" PRIMARY KEY ("ID_FraisTimbre")
);

-- CreateIndex
CREATE UNIQUE INDEX "Citoyen_Email_key" ON "Citoyen"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Demande_ID_Paiement_key" ON "Demande"("ID_Paiement");

-- CreateIndex
CREATE INDEX "Demande_ID_Citoyen_idx" ON "Demande"("ID_Citoyen");

-- CreateIndex
CREATE INDEX "Demande_ID_Paiement_idx" ON "Demande"("ID_Paiement");

-- CreateIndex
CREATE UNIQUE INDEX "Document_Acte_ID_Demande_key" ON "Document_Acte"("ID_Demande");

-- CreateIndex
CREATE INDEX "Document_Acte_ID_Demande_idx" ON "Document_Acte"("ID_Demande");

-- CreateIndex
CREATE INDEX "Document_Acte_ID_Agent_idx" ON "Document_Acte"("ID_Agent");

-- CreateIndex
CREATE UNIQUE INDEX "Paiement_Transaction_ID_key" ON "Paiement"("Transaction_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_Email_key" ON "Agent"("Email");

-- CreateIndex
CREATE INDEX "Historique_Modifications_ID_Agent_idx" ON "Historique_Modifications"("ID_Agent");

-- CreateIndex
CREATE INDEX "Historique_Modifications_ID_Entite_idx" ON "Historique_Modifications"("ID_Entite");

-- CreateIndex
CREATE UNIQUE INDEX "FraisTimbre_TypeActe_key" ON "FraisTimbre"("TypeActe");

-- AddForeignKey
ALTER TABLE "Demande" ADD CONSTRAINT "Demande_ID_Citoyen_fkey" FOREIGN KEY ("ID_Citoyen") REFERENCES "Citoyen"("ID_Citoyen") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demande" ADD CONSTRAINT "Demande_ID_Paiement_fkey" FOREIGN KEY ("ID_Paiement") REFERENCES "Paiement"("ID_Paiement") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document_Acte" ADD CONSTRAINT "Document_Acte_ID_Demande_fkey" FOREIGN KEY ("ID_Demande") REFERENCES "Demande"("ID_Demande") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document_Acte" ADD CONSTRAINT "Document_Acte_ID_Agent_fkey" FOREIGN KEY ("ID_Agent") REFERENCES "Agent"("ID_Agent") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique_Modifications" ADD CONSTRAINT "Historique_Modifications_ID_Agent_fkey" FOREIGN KEY ("ID_Agent") REFERENCES "Agent"("ID_Agent") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique_Modifications" ADD CONSTRAINT "fk_demande" FOREIGN KEY ("ID_Entite") REFERENCES "Demande"("ID_Demande") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique_Modifications" ADD CONSTRAINT "fk_acte" FOREIGN KEY ("ID_Entite") REFERENCES "Document_Acte"("ID_Document_Acte") ON DELETE RESTRICT ON UPDATE CASCADE;
