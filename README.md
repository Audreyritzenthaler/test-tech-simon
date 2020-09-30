
Partie 1 :
Une suite d'éléments ( lettres et symboles ) qui vont de droite vers la gauche avec des écarts différents.
Un input où on est focus, prend les lettres tappées au clavier.
Si on tappe la lettre au bon moment, elle se colore en vert , si c'est trop "tot" ou pas la bonne, elle se met en rouge.
On compte le nombre de points OK et KO
On peut paramètrer l'écart de temps pour "plus ou moins facile"
( pour que les temps ne dépendent pas de la définition de l'écran, on ne se base pas sur la position de la lettre, mais le temps écoulé )


Partie 2 :
Un tableau d'objet avec des listes de réactions et un état global
    Objet : image, titre, texte et état (json)
    État global : une variable JSON
    Réaction : une fonction : test état global & etat objet -> modif état objet || global

    On peut ajouter des objets et en réditer 
    Pour chaque objet, on peut ajouter des réactions
    On peut modifier l'état global

    "Sauver" et "Play" qui mène à un écran où l'on a les différents objets et états mis en action
    Par exemple, on peut imaginer éditer l'état global et les objets affiche leur état au fur et à mesure des changements.