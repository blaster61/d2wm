<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="adeviner EST_DU_TYPE NOMBRE" code="1#NOMBRE#adeviner" />
        <item algoitem="nombre EST_DU_TYPE NOMBRE" code="1#NOMBRE#nombre" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="adeviner PREND_LA_VALEUR 100" code="5#adeviner#100#pasliste" />
        <item algoitem="LIRE nombre" code="2#nombre#pasliste" />
        <item algoitem="TANT_QUE (nombre!=adeviner) FAIRE" code="15#nombre!=adeviner">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="SI (nombre&lt;adeviner) ALORS" code="6#nombre&lt;adeviner">
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="AFFICHER &quot;tu es en dessous&quot;" code="4#tu es en dessous#0" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="AFFICHER &quot;tu es haut dessus&quot;" code="4#tu es haut dessus#0" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="LIRE nombre" code="2#nombre#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
        <item algoitem="AFFICHER &quot;bien joué&quot;" code="4#bien joué#0" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>