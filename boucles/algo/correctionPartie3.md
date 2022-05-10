# Partie 3 : Les boucles  

## Exercice 1  
Écrire un **algorithme** qui exécute une **boucle déterminée** pour un **compteur** allant de **0** à **30** avec un **pas de 5**.  
Si le compteur est un **multiple de 2**, **afficher le chiffre du compteur**. Sinon afficher "**Oops**"

### **Correction** :  

Algorithme ForOops  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;count : entier  

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;POUR count DE 0 A 30 AVEC UN PAS DE 5  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI count % 2 = 0 ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE(count)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SINON  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Oops")  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FINSI  
&nbsp;&nbsp;&nbsp;&nbsp;FINPOUR  

---

## Exercice 2  
Écrire un **algorithme** qui exécute une **boucle indéterminée**.  
Cette boucle devra s'exécuter **tant que la valeur d'une variable bankAccount sera strictement supérieure à 0**.  
Lors de son exécution, la boucle devra **diminuer** la valeur de **bankAccount de 50** et **afficher** un message à l'**utilisateur** "Il vous reste (valeur de la variable bankAccount) sur votre compte".  

### **Correction** :  

Algorithme WhileMoneyLeft  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;count : entier  
&nbsp;&nbsp;&nbsp;&nbsp;bankAccount : entier  

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;TANTQUE bankAccount > 0 FAIRE  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bankAccount <- bankAccount - 50  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Il vous reste : " bankAccount " sur votre compte")  
&nbsp;&nbsp;&nbsp;&nbsp;FINTANTQUE  

---

## Exercice 3  

Que vaudra la variable **calc** à la fin de l'exécution de cet algorithme ?

**Algorithme LogicTest**  

**Variables**  
&nbsp;&nbsp;&nbsp;&nbsp;count : entier  
&nbsp;&nbsp;&nbsp;&nbsp;calc : entier

**Instructions**  
&nbsp;&nbsp;&nbsp;&nbsp;count <- 0  
&nbsp;&nbsp;&nbsp;&nbsp;TANTQUE count <= 10 FAIRE  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc <- calc + count  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count <- count + 1  
&nbsp;&nbsp;&nbsp;&nbsp;FINTANTQUE  

### **Correction** :  

La variable vaut 55 à la fin de l'exécution