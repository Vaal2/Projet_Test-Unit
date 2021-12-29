# Projet_Test-Unit

## Pour lancer le projet 

Il suffit de se mettre à la racine  et de lancer 
```docker-compose up -d --build```

il faudra ensuite regarder les logs du container 'backend' de l'application Docker.

Le backend lance exclusievement les tests.

Il ne sera pas possible de lancer les tests en dehors de la stack Docker à cause de la base de données intégrée.