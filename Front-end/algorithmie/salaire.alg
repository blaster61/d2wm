<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="salaire EST_DU_TYPE LISTE" code="1#LISTE#salaire" />
        <item algoitem="prenom EST_DU_TYPE LISTE" code="1#LISTE#prenom" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="prenom PREND_LA_VALEUR [&quot;claude&quot;,&quot;bernard&quot;,&quot;sophis&quot;,&quot;julie&quot;]" code="5#prenom#[&quot;claude&quot;,&quot;bernard&quot;,&quot;sophis&quot;,&quot;julie&quot;]#pasliste" />
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="LIRE salaire[i]" code="2#salaire#i" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="AFFICHER prenom[i]+&quot; gagne &quot;+salaire[i]" code="3#prenom#1#i]+&quot; gagne &quot;+salaire[i" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>