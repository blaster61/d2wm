<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="nbre EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbre" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;veillez entrer un nombre&quot;" code="4#veillez entrer un nombre#0" />
        <item algoitem="LIRE nbre" code="2#nbre#pasliste" />
        <item algoitem="TANT_QUE (nbre&gt;=0) FAIRE" code="15#nbre&gt;=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="AFFICHER nbre" code="3#nbre#1#pasliste" />
            <item algoitem="nbre PREND_LA_VALEUR nbre-1" code="5#nbre#nbre-1#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>