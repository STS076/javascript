# Partie 4 : Les structures de données (tableaux)  

## Exercice 1  
Soit un **tableau** contenant **10 nombres**.  
Écrire un **algorithme** qui permettra de faire la **multiplication** de ces 10 nombres **entre eux** et d'**affecter** le résultat à une variable **resultCalc**.  

### **Correction** :  

Algorithme MultiplyManyNumbers  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;numbersArray[10] : tableau d'entiers  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc : entier  
&nbsp;&nbsp;&nbsp;&nbsp;count : entier

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;numbersArray[ ] <- numbersArray[51, 84, 23, 20, 64, 78, 999, 1, 32, 48]  
&nbsp;&nbsp;&nbsp;&nbsp;POUR count DE 0 to 9  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultCalc <- resultCalc * numbersArray[count]  
&nbsp;&nbsp;&nbsp;&nbsp;FINPOUR

---

## Exercice 2  
Soit un **tableau** contenant **5 tableaux de données clients** (prénoms, noms et adresses mail).  
Écrire un **algorithme** qui sera capable d'**afficher chaque donnée de chaque client**.

### **Correction** :  

Algorithme DisplayDataUsers  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[5] : tableau de données  
&nbsp;&nbsp;&nbsp;&nbsp;userArray[3] : tableau de chaines 
&nbsp;&nbsp;&nbsp;&nbsp;count : entier
&nbsp;&nbsp;&nbsp;&nbsp;secondCount : entier

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[0] <- userArray["Prénom0", "Nom0", "adresse0@mail.fr"]  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[1] <- userArray["Prénom1", "Nom1", "adresse1@mail.fr"]  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[2] <- userArray["Prénom2", "Nom2", "adresse2@mail.fr"]  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[3] <- userArray["Prénom3", "Nom3", "adresse3@mail.fr"]  
&nbsp;&nbsp;&nbsp;&nbsp;dataUsersArray[4] <- userArray["Prénom4", "Nom4", "adresse4@mail.fr"]  
&nbsp;&nbsp;&nbsp;&nbsp;POUR count DE 0 A 4  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POUR secondCount DE 0 A 2  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE(dataUsersArray[count][secondCount])  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FINPOUR 
&nbsp;&nbsp;&nbsp;&nbsp;FINPOUR

---

## Exercice 3  

Qu'affichera cet algorithme ?  

**Algorithme LogicTest**  

**Variables**  
&nbsp;&nbsp;&nbsp;&nbsp;logicNumbers[10] : tableau d'entiers  
&nbsp;&nbsp;&nbsp;&nbsp;count : entier  
&nbsp;&nbsp;&nbsp;&nbsp;value : entier

**Instructions**  
&nbsp;&nbsp;&nbsp;&nbsp;POUR count DE 0 A 20 AVEC UN PAS DE 2  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logicNumber[value] <- count  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value <- value + 1  
&nbsp;&nbsp;&nbsp;&nbsp;FINPOUR  
&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE(logicNumber[5])  

### **Correction** :  

L'algorithme affichera la valeur de 10.