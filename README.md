# Application-de-reservation-de-velo_p3
Projet 3: Concevoir une application de réservation de vélos en javascript sans plugin utilisant des API REST - formation Développeur web Junior "OpenClassrooms"


Concevez une carte interactive de location de vélos
100 heures
Mis à jour le lundi 8 juillet 2019
Suite aux mises-à-jour apportées par les éditeurs des différentes API utilisées pour ce projet, celui-ci a été révisé. Vous pouvez désormais utiliser l’API de cartographie de votre choix (plusieurs vous seront proposées dans ce projet). Pour la location de vélos, vous êtes maintenant libres de choisir la ville de votre choix desservie par JCDecaux. Le mockup et les données à stocker pour une réservation ont également été révisés.

Vous devez développer une page de type "Single page Application" simulant la réservation de vélos dans une ville. Ces vélos sont répartis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir réserver un vélo depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). La réservation est alors temporairement enregistrée sur le navigateur du visiteur.

Cette application doit notamment, en s'appuyant sur JavaScript, afficher une carte avec la liste des stations de location de vélos disponibles dans la ville. 

L’application doit être développée en JavaScript côté client. Vous ne devez écrire aucun code côté serveur (l’utilisation de PHP ou d'un serveur Node.js, notamment, est interdite).

Vous allez développer une carte permettant de réserver des vélos
Vous allez développer une carte interactive permettant de réserver un vélo
Instructions
Diaporama
Vous devez afficher en haut de la page un diaporama de photos et de textes expliquant le fonctionnement de l'application. La logique du diaporama doit être écrite par vos soins. L’utilisation de tout plugin automatisant la logique de l’application est proscrite.

Le diaporama passe automatiquement à la diaporama suivante toutes les 5 secondes. L’utilisateur peut toutefois choisir de mettre le diaporama en pause. Il peut également reculer ou avancer manuellement à l’aide d’un clic de souris, ainsi qu’avec les touches gauche et droite de son clavier.

Carte des vélos
En-­dessous du diaporama se trouve une carte affichant en temps réel la liste des stations de location de vélos ainsi que leur disponibilité.  La localisation de toutes les stations de vélos est affichée à l’aide de marqueurs.

La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via la plateforme OpenData de JC Decaux.

Les données doivent provenir de l'API temps réel.

Un clic sur un marqueur affiche l’état de la station dans un panneau construit en HTML et CSS à côté de la carte. 

La carte doit être générée dynamiquement via un service de cartographie. Pour vous aider, voici une liste d'API de cartographie disponibles gratuitement :

OpenStreetMap
OpenLayers
LeafletJS
MapQuest
Mapbox
Réservation d'un vélo
Il doit être possible de réserver un vélo disponible à la station sélectionnée en :

indiquant son nom et son prénom,
signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas.
Vous devez écrire vous même le code du Canvas. Aucun plugin n’est autorisé. Vous devez être capable d’expliquer votre code lors de la soutenance.

Une fois la réservation validée,  un vélo est marqué comme réservé à cette station.

Pour ce projet, la réservation ne sera pas communiquée à un serveur. Seul le navigateur de l'utilisateur "retiendra" que le vélo a été réservé.

Les données de réservation seront stockées dans le navigateur à l’aide de l’API Web Storage et affichées en dessous du panneau. L'état de la réservation (s’il y en a une) est ainsi affiché, avec un décompte dynamique du temps restant avant expiration de la réservation.

Une réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.

Le nom et le prénom sont toutefois conservés par le navigateur pour préremplir le formulaire de réservation lors d'un prochain usage, même si le navigateur a été fermé.

Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.

Mockup de la page
Le mockup ci-dessous résume le fonctionnement de la page à créer :

Mockup de la page à créer
Mockup de la page à créer
Contraintes techniques
Le code JavaScript doit être conçu en Programmation Orientée Objet

Vous pouvez vous appuyer sur :

une librairie CSS telle que Bootstrap ou pure css,
une bibliothèque telle que jQuery pour manipuler le DOM.
Aucun plugin jQuery (ou autre) ne doit être utilisé pour la logique du diaporama.

Le code doit exploiter une API cartographique et l'API temps réel de API JCDecaux. Il doit également utiliser les API Web Storage et Canvas.

Ressources complémentaires
En plus des cours du parcours, vous pouvez consulter des ressources extérieures pour vous aider. Par exemple, la documentation du Mozilla Developer Network sur l’élément <canvas>  .

Livrables attendus
Une fois votre application terminée, vous devez l'héberger. Vous pouvez utiliser l’hébergeur de votre choix, à la condition qu’il n’ajoute pas de publicité dénaturant  votre page. Certains fournisseurs d’accès proposent un hébergement adapté. Des sites comme Heroku, Hostinger, Free, Nexgate, Github Pages, ou Google Sites offrent une solution gratuite adapté à ce projet. Vous pouvez également opter pour l’hébergeur payant de votre choix.

Si vous souhaitez héberger le projet en ligne, notre partenaire 1&1 IONOS offre 2 mois d'hébergement gratuits aux étudiants pour toute souscription à un pack d'hébergement (plus d'infos).

Vous devez également livrer les éléments suivants :

Code source complet du projet (HTML/CSS/JavaScript et autres fichiers nécessaires, zippés)
URL du site hébergé
Support de présentation tel que défini pour la 2ème partie de la soutenance.
 

Les 2 premiers livrables devront être déposés sur le site au plus tard 48h avant la soutenance. Le support de présentation devra obligatoirement être présenté pendant la soutenance. 

Soutenance
La soutenance se déroule en 3 étapes :

Dans un premier temps, vous vous positionnez comme un développeur disposant de 15 minutes pour présenter son travail à son CTO, chef de projet ou responsable dans l’entreprise (selon le choix de votre évaluateur).
Dans un second temps vous utiliserez votre support de présentation pour présenter, dans un temps compris entre 8 et 10 minutes :
ce que vous avez compris du rôle de développeur Front End et en quoi votre projet répond bien à ce rôle
les difficultés rencontrées et comment vous les avez résolues
les perspectives d’amélioration : comment feriez-vous évoluer l’application si vous étiez libre d'en fixer les contraintes ?
Enfin,  votre évaluateur reprendra pleinement son rôle de validateur pour un échange Questions/Réponses compris entre 5 et 10 minutes.
 

Référentiel d'évaluation
La validation du projet implique l'acquisition de l'ensemble des compétences qui y sont associées

Chaque compétence est validée si tous les critères d'évaluation définis dans ce référentiel sont validés.

Pour ce projet, la validation sera effectuée par un mentor validateur.

Votre mentor accompagnateur vous inscrira pour cette soutenance dès que vous aurez défini avec lui une date de complétion de ce projet. 

 Créer des objets simples en JavaScript, contenant des méthodes et des propriétés
Le code JavaScript est développé en Orienté Objet
Le diaporama est conforme et fonctionnel
Aucun plugin n’est utilisé pour la logique de l’application (Diaporama, Canvas, Carte)
Récupérer des données de formulaires en utilisant le langage JavaScript
Le canvas est fonctionnel
Le nom et prénom utilisent l’API LocalStorage
Les informations de réservations utilisent l’API SessionStorage
Les données de réservation sont affichées en dessous de la carte, s'il y a une réservation en cours
Faire des requêtes HTTP en langage JavaScript
La carte est récupérée dynamiquement depuis un web service cartographique
Les informations sur les stations utilisent l’API Live de JC Decaux
Écrire un code source lisible
Le code est correctement indenté
Les noms de classes, de méthode et de variables sont explicites (indifféremment en français ou en anglais)
Il y a une seule classe par fichier
Compétences évaluées
Récupérer des données de formulaires en utilisant le langage JavaScript
Faire des requêtes HTTP en langage JavaScript
Créer des objets simples en JavaScript, contenant des méthodes et des propriétés
Ecrire un code source lisible
