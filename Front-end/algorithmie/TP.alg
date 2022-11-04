<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="nom EST_DU_TYPE CHAINE" code="1#CHAINE#nom" />
        <item algoitem="age EST_DU_TYPE NOMBRE" code="1#NOMBRE#age" />
        <item algoitem="nationalité EST_DU_TYPE CHAINE" code="1#CHAINE#nationalité" />
        <item algoitem="destination EST_DU_TYPE CHAINE" code="1#CHAINE#destination" />
        <item algoitem="gare EST_DU_TYPE LISTE" code="1#LISTE#gare" />
        <item algoitem="reponse EST_DU_TYPE CHAINE" code="1#CHAINE#reponse" />
        <item algoitem="prixReserv EST_DU_TYPE NOMBRE" code="1#NOMBRE#prixReserv" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE nom" code="2#nom#pasliste" />
        <item algoitem="LIRE age" code="2#age#pasliste" />
        <item algoitem="LIRE nationalité" code="2#nationalité#pasliste" />
        <item algoitem="LIRE destination" code="2#destination#pasliste" />
        <item algoitem="gare PREND_LA_VALEUR [&quot;Surdon&quot;,&quot;Caen&quot;,&quot;Le Mans&quot;,&quot;Paris&quot;]" code="5#gare#[&quot;Surdon&quot;,&quot;Caen&quot;,&quot;Le Mans&quot;,&quot;Paris&quot;]#pasliste" />
        <item algoitem="SI (age&gt;=18 ET age&lt;=26 ET destination==&quot;surdon&quot;) ALORS" code="6#age&gt;=18 ET age&lt;=26 ET destination==&quot;surdon&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 9" code="5#prixReserv#9#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Surdon est sur le quai 1, le tarif est de &quot;+prixReser&quot;" code="4#le tarif pour aller à Surdon est sur le quai 1, le tarif est de &quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=18 ET age&lt;=26 ET destination==&quot;Caen&quot;) ALORS" code="6#age&gt;=18 ET age&lt;=26 ET destination==&quot;Caen&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 16.2" code="5#prixReserv#16.2#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=18 ET age&lt;=26 ET destination==&quot;Le Mans&quot;) ALORS" code="6#age&gt;=18 ET age&lt;=26 ET destination==&quot;Le Mans&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 6.6" code="5#prixReserv#6.6#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=18 ET age&lt;=26 ET destination==&quot;Paris&quot;) ALORS" code="6#age&gt;=18 ET age&lt;=26 ET destination==&quot;Paris&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 36.6" code="5#prixReserv#36.6#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Paris est de&quot;+prixReserv+&quot;, mais il n'y a pas de départ aujourd'hui depuis cette gare&quot;" code="4#le tarif pour aller à Paris est de&quot;+prixReserv+&quot;, mais il n'y a pas de départ aujourd'hui depuis cette gare#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=13 ET age&lt;=17 ET destination==&quot;Surdon&quot;) ALORS" code="6#age&gt;=13 ET age&lt;=17 ET destination==&quot;Surdon&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 7.5" code="5#prixReserv#7.5#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Surdon est sur le quai 1, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Surdon est sur le quai 1, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=13 ET age&lt;=17 ET destination==&quot;Caen&quot;) ALORS" code="6#age&gt;=13 ET age&lt;=17 ET destination==&quot;Caen&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 13.5" code="5#prixReserv#13.5#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=13 ET age&lt;=17 ET destination==&quot;Le Mans&quot;) ALORS" code="6#age&gt;=13 ET age&lt;=17 ET destination==&quot;Le Mans&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 5.5" code="5#prixReserv#5.5#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=13 ET age&lt;=17 ET destination==&quot;Paris&quot;) ALORS" code="6#age&gt;=13 ET age&lt;=17 ET destination==&quot;Paris&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 30.5" code="5#prixReserv#30.5#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Paris est de&quot;+prixreserv+&quot;, mais il n'y a aucun de départ aujourd'hui depuis cette gare&quot;" code="4#le tarif pour aller à Paris est de&quot;+prixreserv+&quot;, mais il n'y a aucun de départ aujourd'hui depuis cette gare#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=0 ET age&lt;=12 ET destination==&quot;Paris&quot;) ALORS" code="6#age&gt;=0 ET age&lt;=12 ET destination==&quot;Paris&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 27.45" code="5#prixReserv#27.45#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Paris est de&quot;+prixreserv+&quot;, mais il n'y a aucun de départ aujourd'hui depuis cette gare&quot;" code="4#le tarif pour aller à Paris est de&quot;+prixreserv+&quot;, mais il n'y a aucun de départ aujourd'hui depuis cette gare#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=0 ET age&lt;=12 ET destination==&quot;Caen&quot;) ALORS" code="6#age&gt;=0 ET age&lt;=12 ET destination==&quot;Caen&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 12.15" code="5#prixReserv#12.15#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Caen est sur le quai 3, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=0 ET age&lt;=12 ET destination==&quot;Le Mans&quot;) ALORS" code="6#age&gt;=0 ET age&lt;=12 ET destination==&quot;Le Mans&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 4.95" code="5#prixReserv#4.95#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Le Mans est sur le quai 5, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (age&gt;=0 ET age&lt;=12 ET destination==&quot;Surdon&quot;) ALORS" code="6#age&gt;=0 ET age&lt;=12 ET destination==&quot;Surdon&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="prixReserv PREND_LA_VALEUR 6.75" code="5#prixReserv#6.75#pasliste" />
            <item algoitem="AFFICHER &quot;le tarif pour aller à Surdon est sur le quai 1, le tarif est de&quot;+prixReser&quot;" code="4#le tarif pour aller à Surdon est sur le quai 1, le tarif est de&quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="TANT_QUE (reponse!=&quot;oui&quot;ET reponse!=&quot;non&quot;) FAIRE" code="15#reponse!=&quot;oui&quot;ET reponse!=&quot;non&quot;">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="AFFICHER &quot;Voulez vous recevoir des notifications par SMS?&quot;" code="4#Voulez vous recevoir des notifications par SMS?#1" />
            <item algoitem="LIRE reponse" code="2#reponse#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
        <item algoitem="SI (reponse==&quot;oui&quot;) ALORS" code="6#reponse==&quot;oui&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="AFFICHER &quot;votre réservation est finalisé.Nous vous souhaitons un bon voyage avec la SNCF&quot;" code="4#votre réservation est finalisé.Nous vous souhaitons un bon voyage avec la SNCF#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (nationalité==&quot;France&quot;) ALORS" code="6#nationalité==&quot;France&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="AFFICHER &quot;Merci &quot;+nom+&quot;, votre réservation pour &quot;+destination+&quot; est effectuée pour un montant de &quot;+prixReser&quot;" code="4#Merci &quot;+nom+&quot;, votre réservation pour &quot;+destination+&quot; est effectuée pour un montant de &quot;+prixReser#1" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="AFFICHER &quot;Thank you &quot;+nom+&quot;, your reservation for &quot;+destination+&quot; is made for an amount of &quot;+prixReser&quot;" code="4#Thank you &quot;+nom+&quot;, your reservation for &quot;+destination+&quot; is made for an amount of &quot;+prixReser#1" />
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>