<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="euro EST_DU_TYPE NOMBRE" code="1#NOMBRE#euro" />
        <item algoitem="dollar EST_DU_TYPE NOMBRE" code="1#NOMBRE#dollar" />
        <item algoitem="resultat EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;veuillez afficher la somme converti&quot;" code="4#veuillez afficher la somme converti#0" />
        <item algoitem="LIRE euro" code="2#euro#pasliste" />
        <item algoitem="euro PREND_LA_VALEUR 1" code="5#euro#1#pasliste" />
        <item algoitem="dollar PREND_LA_VALEUR 1.09" code="5#dollar#1.09#pasliste" />
        <item algoitem="POUR euro ALLANT_DE 1 A 10" code="12#euro#1#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="resultat PREND_LA_VALEUR euro*dollar" code="5#resultat#euro*dollar#pasliste" />
            <item algoitem="AFFICHER resultat" code="3#resultat#1#pasliste" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>