<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="dwwm EST_DU_TYPE LISTE" code="1#LISTE#dwwm" />
        <item algoitem="nbre EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbre" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="nbre PREND_LA_VALEUR 5" code="5#nbre#5#pasliste" />
        <item algoitem="POUR i ALLANT_DE 0 A nbre-1" code="12#i#0#nbre-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="LIRE dwwm[i]" code="2#dwwm#i" />
            <item algoitem="somme PREND_LA_VALEUR somme + dwwm[i]" code="5#somme#somme + dwwm[i]#pasliste" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="AFFICHER &quot;La moyenne de la classe est de: &quot; +somme&#x2F;nbr&quot;" code="4#La moyenne de la classe est de: &quot; +somme&#x2F;nbr#1" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>