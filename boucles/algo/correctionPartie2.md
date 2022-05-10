# Partie 2 : Les conditions  

## Exercice 1  
Écrire un **algorithme** qui demande à l'**utilisateur** son **âge** puis son **genre**.  
En fonction des réponses de celui-ci, afficher une phrase telle que :  

**"Bonjour Madame. Vous êtes majeure."**  

PS : On se limitera pour cet exercice à Homme et Femme.  

### **Correction** :  

Algorithme TestAgeAndGender  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;age : chaine  
&nbsp;&nbsp;&nbsp;&nbsp;gender : chaine  

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Quel âge avez-vous ?")  
&nbsp;&nbsp;&nbsp;&nbsp;LIRE(age)  
&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Quel est votre genre ?")  
&nbsp;&nbsp;&nbsp;&nbsp;LIRE(gender)  
&nbsp;&nbsp;&nbsp;&nbsp;Si age >= 18 ET gender = femme ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Bonjour Madame. Vous êtes majeure.")  
&nbsp;&nbsp;&nbsp;&nbsp;SINONSI age < 18 ET gender = femme ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Bonjour Madame. Vous êtes mineure.")  
&nbsp;&nbsp;&nbsp;&nbsp;SINONSI age >= 18 ET gender = homme ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Bonjour Monsieur. Vous êtes majeur.")  
&nbsp;&nbsp;&nbsp;&nbsp;SINON  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Bonjour Monsieur. Vous êtes mineur.")  
&nbsp;&nbsp;&nbsp;&nbsp;FINSI

---

## Exercice 2  

Écrire un **algorithme** qui effectue une **division** de **2 chiffres** (n'importe lesquels) et qui affiche "**Oui**" dans le cas où le résultat est un **multiple de 4** ou "**Non**" s'il ne l'est pas.  

### **Correction** :  

Algorithme TestMultiply  

Variables  
&nbsp;&nbsp;&nbsp;&nbsp;firstNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;secondNumber : entier  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc : flottant

Instructions  
&nbsp;&nbsp;&nbsp;&nbsp;resultCalc <- firstNumber / secondNumber  
&nbsp;&nbsp;&nbsp;&nbsp;SI resultCalc % 4 = 0 ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Oui")
&nbsp;&nbsp;&nbsp;&nbsp;SINON  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Non")  
&nbsp;&nbsp;&nbsp;&nbsp;FINSI

---

## Exercice 3  

Quel résultat cet algorithme affichera une fois son exécution terminée ?  

**Algorithme CalcIMC**  

**Variables**  
&nbsp;&nbsp;&nbsp;&nbsp;weight : flottant  
&nbsp;&nbsp;&nbsp;&nbsp;size : flottant  
&nbsp;&nbsp;&nbsp;&nbsp;imcResult : flottant  

**Instructions**  
&nbsp;&nbsp;&nbsp;&nbsp;weight <- 85.6  
&nbsp;&nbsp;&nbsp;&nbsp;size <- 1.75  
&nbsp;&nbsp;&nbsp;&nbsp;imcResult <- weight / (size * size)  
&nbsp;&nbsp;&nbsp;&nbsp;SI imcResult >= 18.5 ET imcResult <= 25 ALORS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Votre IMC est normal, votre IMC est de :" imcResult)  
&nbsp;&nbsp;&nbsp;&nbsp;SINON  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Surveillez votre poids, votre IMC est de :" imcResult)  
&nbsp;&nbsp;&nbsp;&nbsp;FINSI

### **Correction** :  

L'algorithme est sensé afficher "Surveiller votre poids, votre IMC est de : 27,95"