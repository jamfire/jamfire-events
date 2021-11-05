---
templateKey: page
slug: /
title: Bienvenue
pageBranding:
  primaryColor: "#2371e3"
  primaryColorHover: "#4687e5"
---

Ceci est un site de démonstration pour `gatsby-theme-jamfire-conference`, un thème GatsbyJS
qui tente de repousser les limites de la technologie Jamstack afin de fournir un
espace de conférence en ligne.

## Démarrage

Passez les détails et dirigez-vous vers le [starter](https://github.com/jamfire/gatsby-starter-jamfire-conference "Starter Package") si vous souhaitez être rapidement opérationnel en utilisant [Netlify](https://netlify.com "Netlify") ou [Gatsby Cloud.](https://www.gatsbyjs.com/products/cloud/ "Gastby Cloud") Vous devrez configurer un compte [Google Firebase](https://firebase.google.com/) afin d'utiliser la fonction de chat et l'authentification des utilisateurs.

Vous pouvez également déployer en un clic vers [Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/jamfire/gatsby-starter-jamfire-conference) ou [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/jamfire/gatsby-starter-jamfire-conference) mais n'oubliez pas que vous devez configurer votre [environmental config](https://github.com/jamfire/gatsby-theme-jamfire-conference#seting-up-your-environment) pour que votre site fonctionne correctement :

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" height="38" width="173">](https://app.netlify.com/start/deploy?repository=https://github.com/jamfire/gatsby-starter-jamfire-conference) [<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud" height="38" width="251">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/jamfire/gatsby-starter-jamfire-conference)

## La technologie derrière ce thème

Si vous n'êtes pas familier avec le Jamstack, voici les bases : JAM signifie javascript, apis et markup. C'est la sauce secrète pour créer des sites web et des applications à haut débit. Ce thème relève davantage de la catégorie des applications web, mais il est servi dans le navigateur. C'est clair comme de l'eau de roche ? Bien.

Ce thème est construit en utilisant GatsbyJS, NetlifyCMS, et Firebase. GatsbyJS sert à construire des sites Web à grande vitesse, NetlifyCMS à gérer le contenu et Firebase à assurer l'interaction humaine (chat, connexion, etc.).

## Caractéristiques du thème

Que fait donc ce site ? Il vous offre un espace de conférence en ligne où vous pouvez gérer plusieurs événements sans avoir à débourser de grosses sommes pour un logiciel propriétaire. Si vous êtes un développeur ReactJS, vous pouvez personnaliser ce site à votre goût en utilisant [theme shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/).

Ce thème présente les caractéristiques suivantes :

- Des couleurs primaires et d'accentuation personnalisables - Des logos et des favicons téléchargeables par événement - Une page d'accueil - Une page d'événements paginée - Et des pages d'événements... - Authentification de l'utilisateur

## Caractéristiques d'un événement unique

- Un espace Lobby pour décrire votre événement - Un espace Livestream/Vidéo pour votre événement - Un compte à rebours et un chronomètre avant et pendant l'événement - Le programme de l'événement - Des salles de discussion utilisant Jitsi - Un chat alimenté par Firestore - Des questions-réponses pour les informations les plus importantes de votre événement - Des étiquettes de navigation personnalisables pour s'adapter à votre événement.

## Gestion du contenu

Ce thème utilise le CMS Netlify pour gérer le contenu. Il a été développé de manière à ce que le thème vive séparément de votre contenu. Cela signifie que vous pouvez rester à jour avec les nouvelles fonctionnalités en mettant simplement à jour le thème sans risquer d'altérer votre contenu.

Vous aurez besoin de votre login Github où votre site est stocké pour vous connecter. Vous pouvez vous connecter en ajoutant `/admin` à votre domaine, par exemple `https://localhost:8000/admin`.

## Problèmes/Rapports de bogues

Vous avez trouvé un problème ? [Signalez-le.](https://github.com/jamfire/gatsby-theme-jamfire-conference/issues)
