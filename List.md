## List.jsx

### Effet (useEffet()) - ligne 19

Cet effet va nous permettre d'observer les changements sur la variable d'état "Filtres". A chaque changement de celle-ci le code de l'effet va être executé.

Voici le détail de ce qu'il se passe à l'intéreieur : 

Effet - 1
Nous utilisons la fonction filter(URL) de javascript qui va nous permettre de parcourir chaque ligne du tableau original d'épaves. 
```
epaves.features.filter()
```
A chaque boucle, filter retourne uniquement les éléments si sa sous-fonction return true
```
epaves.features.filter((epave, i) => {
    return true || false
})
``` 
Le résultat est stocké dans la variable "newEpaves"
```
let newEpaves = epaves.features.filter((epave, i) => {...})
```

Effet - 2
Il nous faut maintenant écrire le code qui va gérer quand unn ligne vaut true ou false.
Par défaut on considère que la ligne est true et sera donc intégrée au nouveau tableau d'épaves.
```
let correspondance = true
```

Effet - 3
Nous allons parcourir le tableau des filtres contenus dans la variable d'état "filtres" 
```
for (let critere in filtres) { ... }
```
Pour rappel, filtres contient un tableaux avec les différentes informations liées à un filtre : 
````
{ nom_du_champ: { value: "sa valeur", type: "between" }}
```
Donc à chaque boucle nous récupérons un objet representatnt un filtre (correspondant aux champs "Filtres"). Dans notre exemple nous en avons 2.

Effet - 4
Ici simple vérification, si la valeur est égale à "" (vide, pas null ou undefined) c'est que nous avons selectionné dans un champ aucune valeur. Nous pouvons donc court-circuiter la boucle et renvoyer la ligne au nouveau tableau "newEpaves
```
if (filtres[critere].value === "") continue; 
```

Effet - 5
Notre tableau de filtres contient potentiellement plusieurs filtres avec différents "types". Ces types nous servent justement ici pour réaliser la bonne opération pour déterminer si l'élement du tableau d'origine (l'épave en cours dans la boucle) correspond à notre critère de filtre.
Pour cela nous utilisons un switch afin d'éviter un usage intempestif de if / elseif / else.
```
switch (filtres[critere].type) {...}
```

Effet - 6
Cas n°1 de notre exmple, le type vaut between, nous gérons donc le cas en faisant une vérification double car nous cherchons un interval. Si trop petit ou trop grand la ligne n'est pas retournée dans le nouveau tableau. Ceci est determiné par le passage de la variable correspondance à false.
```
case "between":
    if (
        epave.properties[critere] < filtres[critere].value[0] ||
        epave.properties[critere] > filtres[critere].value[1]
    )
        correspondance = false;
    break;
```

Effet 7 - 

 






