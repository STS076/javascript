# Partie 5 : Les fonctions  

## Exercice 1  
Écrire un **algorithme** qui permettra de calculer la **somme** de 2 nombres, puis de **multiplier le résultat par 5**.  
Le calcul de le somme devra se faire dans une **fonction SumNumbers** qui sera à **appeler** dans l'**algorithme principal**.  

### **Correction** :  

***Sub-Algorithme 'SumNumbers'***  

*Paramètres d'entrée*  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  

*Paramètres de sortie*  
&nbsp;&nbsp;&nbsp;&nbsp;resultSum : entier  

*Instructions*  
&nbsp;&nbsp;&nbsp;&nbsp;resultSum <- firstNumber + secondNumber  

***Algorithme CalcNumbers***

*Variables*  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultSumFunction : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc : entier  

*Instructions*  
&nbsp;&nbsp;&nbsp;&nbsp;resultSumFunction <- SumNumbers(firstNumber, secondNumber)  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc <- resultSumFunction * 5  

---

## Exercice 2  
Écrire un **algorithme** qui permettra de faire le **modulo** de 2 nombres, puis de **multiplier le résultat par 60**.  
Le calcul du modulo devra se faire dans une **fonction ModuloNumbers** qui sera à **appeler** dans l'**algorithme principal**.

### **Correction** :  

***Sub-Algorithme 'ModuloNumbers'***  

*Paramètres d'entrée*  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier   
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  

*Paramètres de sortie*  
&nbsp;&nbsp;&nbsp;&nbsp;resultModulo : entier  

*Instructions*  
&nbsp;&nbsp;&nbsp;&nbsp;resultModulo <- firstNumber % secondNumber  

***Algorithme CalcNumbers***

*Variables*  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier    
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultModuloFunction : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc : entier  

*Instructions*  
&nbsp;&nbsp;&nbsp;&nbsp;resultModuloFunction <- ModuloNumbers(firstNumber, secondNumber)  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc <- resultModuloFunction * 60  

---

## Exercice 3  
Grâce aux sous-algorithmes (fonctions) que vous avez déjà créés dans les exercices 1 et 2, donner le valeur de resultCalc à la fin de cet algorithme :  

**Algorithme CalcNumbers**  

**Variables**  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;thirdNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;fourthNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;sumNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;moduloNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc : entier  

**Instructions**  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber <- 58  
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber <- 64  
&nbsp;&nbsp;&nbsp;&nbsp;thirdNumber <- 432  
&nbsp;&nbsp;&nbsp;&nbsp;fourthNumber <- 153  
&nbsp;&nbsp;&nbsp;&nbsp;sumNumber <- SumNumber(firstNumber, secondNumber)  
&nbsp;&nbsp;&nbsp;&nbsp;moduloNumber <- ModuloNumber(thirdNumber, fourthNumber)  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc <- sumNumber * moduloNumber  

### **Correction** :  

resultCalc vaudra 15372 à la sortie de cet algorithme.