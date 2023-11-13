# Guide d'utilisation des tests automatisés Cypress
## Prérequis
Avant de commencer, assurez-vous de disposer des éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

## Installation
Suivez ces étapes pour installer Cypress sur votre machine :

1. Assurez-vous d'avoir Node.js et npm installés.
2. Ouvrez votre terminal et exécutez la commande suivante pour installer Cypress globalement :
   ```bash
   cd automatic-tests
   npm install
   ```
3. Vous êtes maintenant prêt à utiliser Cypress pour exécuter des tests.

## Structure du Projet
Lorsque vous clonez ou téléchargez le projet, vous trouverez une structure de fichiers typique comme suit :

```
cypress-bdd-demo/
  cypress/
    fixtures/
    integration/
        |-- e2e
            |--Feature
                |--feature.js
                |--feature.feature
    plugins/
    support/
        |-- environements/
  node_modules/
  cypress.config.js
  package.json
  ...
```

- **cypress/** : Le répertoire principal des tests Cypress.
- **cypress/support/environement/** : Les fichiers des variables environnements
- **cypress/integration/** : Les tests / features
- **cypress/plugins/** : Les fichiers de plugins personnalisés.
- **cypress/support/** : Les fichiers de support, tels que les commandes personnalisées.
- **cypress.json** : Le fichier de configuration Cypress.


## Configuration
Vous pouvez personnaliser la configuration de Cypress en modifiant le fichier `cypress.json`. Consultez la [documentation de Cypress](https://docs.cypress.io/guides/references/configuration.html) pour en savoir plus sur les options de configuration disponibles.

## Organisation des Tests
Pour améliorer la réutilisation du code, vous pouvez définir des mots-clés partagés dans les fichiers situés dans le répertoire 
`./support/common-step-definitions/`
```
  ./support/common-step-definitions/navigation-common_steps.js
  ./support/common-step-definitions/authentication-common-steps.js
...
```
## Exécution des Tests
Les deux commandes utilisées sont configurées dans le fichier `cypress.config.json`
### Interface Graphique (GUI)
Pour exécuter les tests Cypress en mode GUI, utilisez la commande suivante :
```bash
  npm run cypress:open
```
Cela ouvrira l'application Cypress, où vous pourrez sélectionner les tests/features à exécuter.
### Ligne de Commande (CLI)
Pour exécuter les tests en mode headless depuis la ligne de commande, utilisez la commande suivante :
```bash
  npm run cypress:run
```
## Variabilisation des environnements
Pour variabiliser l'éxecution des tests sur différents environnements, une configuration est mis en place permettant le lancement des tests sur l'environnement souhaité (passé en variable d'environnement).

### Comment changer l'environnement d'éxecution ?
Dans le fichier Cypress.config.json,changer la valeur de variable, par défaut il est configuré en local (localhost:3000)
```
    env: {
      ENV: "local"
    }
```

### Utilisation des tags

L'utilisation de balises (tags) dans vos tests Cypress vous permet d'organiser et d'exécuter vos tests de manière sélective en fonction des fonctionnalités, des domaines ou des assets.

Exemple d'utilisation des tags :
### Comment je peux configurer l'éxecution par TAG:
Dans le fichier Cypress.config.json,changer la valeur de variable tags :
Exemples
```
  tags:"@Feature1"  ==> permet d'éxecuter les tests tagger avec @Feature1 
```
```
  tags:"@Feature1,@Feature2"  ==> permet d'éxecuter les tests tagger avec @Feature1 et @Feature2
```

## Rapports et Résultats
Après l'exécution des tests, vous trouverez des rapports détaillés dans le répertoire `cypress/reports`. 
Vous pouvez consulter les rapports HTML pour analyser les résultats de chaque test.

## Bonnes Pratiques
Voici quelques recommandations à suivre pour adopter de bonnes pratiques lors de l'écriture de tests Cypress :

- Optez pour des sélecteurs spécifiques (data-test-id) pour cibler les éléments de l'interface utilisateur de manière précise
- Rédigez des tests autonomes et bien organisés, de manière à ce qu'ils puissent être exécutés indépendamment les uns des autres et sur tous les environnements.
- Utilisez des balises (tags) pour organiser et classifier vos tests en fonction de leur objectif ou de leur domaine d'application.
- Pour éviter la duplication de code, créez des commandes personnalisées (cypress commands) et des commandes réutilisables dans différents tests.

## Ressources Additionnelles
- [Documentation Cypress officielle](https://docs.cypress.io/)
- [Exemples de tests Cypress](https://github.com/cypress-io/cypress-example-recipes)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

## Contact
ktamiismail@gmail.com
