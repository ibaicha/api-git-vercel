-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pays" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sigle" TEXT,

    CONSTRAINT "Pays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "paysId" INTEGER NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SousZone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "zoneId" INTEGER NOT NULL,

    CONSTRAINT "SousZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sousZoneId" INTEGER NOT NULL,

    CONSTRAINT "Localite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "paysId" INTEGER NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Departement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commune" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "departementId" INTEGER NOT NULL,

    CONSTRAINT "Commune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Village" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "communeId" INTEGER NOT NULL,
    "localiteId" INTEGER NOT NULL,

    CONSTRAINT "Village_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeOp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TypeOp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointCollecte" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "localiteId" INTEGER NOT NULL,

    CONSTRAINT "PointCollecte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Op" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "typeOpId" INTEGER NOT NULL,
    "pointCollecteId" INTEGER NOT NULL,

    CONSTRAINT "Op_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producteur" (
    "id" SERIAL NOT NULL,
    "compte" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "cni" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "opId" INTEGER NOT NULL,

    CONSTRAINT "Producteur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Annee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saison" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Saison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filiere" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Filiere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isDerive" BOOLEAN NOT NULL,
    "isEnsachage" BOOLEAN NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "filiereId" INTEGER NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variete" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surface_unite" TEXT NOT NULL,
    "quantite_unite" TEXT NOT NULL,
    "rendement_unite" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "produitId" INTEGER NOT NULL,

    CONSTRAINT "Variete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeChargeExploitation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TypeChargeExploitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilleChargeExploitation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FamilleChargeExploitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChargeExploitation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "pu" DOUBLE PRECISION NOT NULL,
    "quantite_unite_superficie" DOUBLE PRECISION NOT NULL,
    "isAchat" BOOLEAN NOT NULL,
    "typeChargeExploitationId" INTEGER NOT NULL,
    "familleChargeExploitationId" INTEGER NOT NULL,

    CONSTRAINT "ChargeExploitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exploitation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "pu" DOUBLE PRECISION NOT NULL,
    "surface" DOUBLE PRECISION NOT NULL,
    "production" DOUBLE PRECISION NOT NULL,
    "isAchat" BOOLEAN NOT NULL,
    "varieteId" INTEGER NOT NULL,
    "anneeId" INTEGER NOT NULL,
    "saisonId" INTEGER NOT NULL,
    "producteurId" INTEGER NOT NULL,

    CONSTRAINT "Exploitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserZone" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,

    CONSTRAINT "UserZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSousZone" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sousZoneId" INTEGER NOT NULL,

    CONSTRAINT "UserSousZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLocalite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "localiteId" INTEGER NOT NULL,

    CONSTRAINT "UserLocalite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVillage" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "villageId" INTEGER NOT NULL,

    CONSTRAINT "UserVillage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPointCollecte" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "pointCollecteId" INTEGER NOT NULL,

    CONSTRAINT "UserPointCollecte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOp" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "opId" INTEGER NOT NULL,

    CONSTRAINT "UserOp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Pays_name_key" ON "Pays"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TypeOp_name_key" ON "TypeOp"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Producteur_compte_key" ON "Producteur"("compte");

-- CreateIndex
CREATE UNIQUE INDEX "Saison_value_key" ON "Saison"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Saison_name_key" ON "Saison"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TypeChargeExploitation_name_key" ON "TypeChargeExploitation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FamilleChargeExploitation_name_key" ON "FamilleChargeExploitation"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_paysId_fkey" FOREIGN KEY ("paysId") REFERENCES "Pays"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SousZone" ADD CONSTRAINT "SousZone_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localite" ADD CONSTRAINT "Localite_sousZoneId_fkey" FOREIGN KEY ("sousZoneId") REFERENCES "SousZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_paysId_fkey" FOREIGN KEY ("paysId") REFERENCES "Pays"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Departement" ADD CONSTRAINT "Departement_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commune" ADD CONSTRAINT "Commune_departementId_fkey" FOREIGN KEY ("departementId") REFERENCES "Departement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_communeId_fkey" FOREIGN KEY ("communeId") REFERENCES "Commune"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_localiteId_fkey" FOREIGN KEY ("localiteId") REFERENCES "Localite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointCollecte" ADD CONSTRAINT "PointCollecte_localiteId_fkey" FOREIGN KEY ("localiteId") REFERENCES "Localite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Op" ADD CONSTRAINT "Op_typeOpId_fkey" FOREIGN KEY ("typeOpId") REFERENCES "TypeOp"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Op" ADD CONSTRAINT "Op_pointCollecteId_fkey" FOREIGN KEY ("pointCollecteId") REFERENCES "PointCollecte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producteur" ADD CONSTRAINT "Producteur_opId_fkey" FOREIGN KEY ("opId") REFERENCES "Op"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_filiereId_fkey" FOREIGN KEY ("filiereId") REFERENCES "Filiere"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variete" ADD CONSTRAINT "Variete_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChargeExploitation" ADD CONSTRAINT "ChargeExploitation_typeChargeExploitationId_fkey" FOREIGN KEY ("typeChargeExploitationId") REFERENCES "TypeChargeExploitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChargeExploitation" ADD CONSTRAINT "ChargeExploitation_familleChargeExploitationId_fkey" FOREIGN KEY ("familleChargeExploitationId") REFERENCES "FamilleChargeExploitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exploitation" ADD CONSTRAINT "Exploitation_varieteId_fkey" FOREIGN KEY ("varieteId") REFERENCES "Variete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exploitation" ADD CONSTRAINT "Exploitation_anneeId_fkey" FOREIGN KEY ("anneeId") REFERENCES "Annee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exploitation" ADD CONSTRAINT "Exploitation_saisonId_fkey" FOREIGN KEY ("saisonId") REFERENCES "Saison"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exploitation" ADD CONSTRAINT "Exploitation_producteurId_fkey" FOREIGN KEY ("producteurId") REFERENCES "Producteur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserZone" ADD CONSTRAINT "UserZone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserZone" ADD CONSTRAINT "UserZone_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSousZone" ADD CONSTRAINT "UserSousZone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSousZone" ADD CONSTRAINT "UserSousZone_sousZoneId_fkey" FOREIGN KEY ("sousZoneId") REFERENCES "SousZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocalite" ADD CONSTRAINT "UserLocalite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocalite" ADD CONSTRAINT "UserLocalite_localiteId_fkey" FOREIGN KEY ("localiteId") REFERENCES "Localite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVillage" ADD CONSTRAINT "UserVillage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVillage" ADD CONSTRAINT "UserVillage_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPointCollecte" ADD CONSTRAINT "UserPointCollecte_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPointCollecte" ADD CONSTRAINT "UserPointCollecte_pointCollecteId_fkey" FOREIGN KEY ("pointCollecteId") REFERENCES "PointCollecte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOp" ADD CONSTRAINT "UserOp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOp" ADD CONSTRAINT "UserOp_opId_fkey" FOREIGN KEY ("opId") REFERENCES "Op"("id") ON DELETE CASCADE ON UPDATE CASCADE;
