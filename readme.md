# Vel'Hauts-de-France : Readme

## Cadre de l'exercice

Le site Vel'Hauts-de-France a été réalisé comme exercice final dans le cadre de la formation de développeur intégrateur web dispensée par Simplon-Lens.
Il a été réalisé dans le cadre d'un projet de groupe.

## Contributeurs

Les contributeurs au projet sont les suivants :
- Antoine
- Audrey
- Océane
- William

Pour des raisons d'organisation, la personne suivante a contribué sur le premier jour du projet :
- Margaux

## Consigne de l'exercice

L'exercice consiste à développer partiellement un site web responsive.
Le site représente la partie "Hauts-de-France" de l'Eurovélo 5.
Le site doit être développé en HTML, CSS et JavaScript.
Tant que ceci est pertinent, le contenu du site doit être intégré via Strapi.
Les seules pages obligatoires de l'exercice sont la page d'accueil et l'itinéraire.


## Méthode de travail

### Strapi

Les éléménts suivant ont été intégrés au moyen avec Strapi :
- Etapes de l'itinéraire
- Grille des outils proposés à l'utilisateur
- Témoignages

Bien que le site en tant que tel ne soit pas pensé pour être réellement utilisé, il s'agit de simuler la structure d'un site dynamique.
Ainsi, pour déterminer ce qui allait être intégré avec Strapi ou non, nous avons considéré deux critères :
- L'éventuelle modification des éléments par le client.
- La nature participative de l'élément.
- L'aspect pratique dans le développement.

Dans cette logique :
- Les étapes de l'itinéraire ont été intégrées par Strapi afin de veiller à ce que leur contenu soit correctement formaté.
De plus, nous pourrions imaginer que si l'itinéraire venait à être modifié, le client aurait besoin d'effectuer une modification en conséquence.
- Les témoignages ont été intégrées par Strapi de par leur nature participative. Qu'une validation du webmaster soit nécessaire ou non, il s'agit d'un contenu
idéalement saisi par formulaire.
- Les grille des outils proposés à l'utilisateur a été intégrée par Strapi par aspect pratique dans le développement.
Le format de chaque élément est bien défini et les éléments sont au nombre de 9, ce qui rend déjà en soi l'utilisation de Strapi pertinente.
De plus, dans la même logique pour pour les étapes de l'itinéraire, nous pouvons imaginer la possibilité que le client demande une modification de ces éléments.

### Leaftlet-GPX
Leaflet-JS est une api permettant d'ajouter des cartes en JavaScript. 
Leaflet-GPX est une bibliothèque supplémentaire qui permet d'ajouter des fichiers GPX à une carte. 
Cela a permis d'ajouter une carte incluant des fichiers GPX, ainsi que d'établir des liens entre ces fichiers et des "articles"-trajet. 
Les articles-trajet sont situés dans une partie de navigation à gauche de la carte.


## Langages utilisés

Les langages utilisés dans le site sont les suivants :
- HTML
- CSS
- JavaScript

### HTML

Le Html est utilisé dans ce site pour structurer la mise en page des deux pages développées.
Il est également utilisé pour intégrer le texte des éléments statiques.

### CSS

Le CSS est utilisé pour appliquer les styles sur l'ensemble des éléments du site.

### JavaScript

- Le JavaScript est utilisé pour les fonctions suivantes :
- Intégration des données de Strapi dans le site
- Ajout de la carte et des waypoints
- Barre de navigation
- Burger menu en format téléphone du site
- Intégration du header dans l'ensemble des pages
- Disparition du header sur l'action de scroll down

## Carte

La carte a été Installée dans la racine leaflet JS.
Des fichiers GPX on été inclus dans la carte.
Le lien a été fait entre les étapes et les fichier GPX via JS.
