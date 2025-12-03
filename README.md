# TP8 : Intégration Front-End (React) et Back-End (Express + MongoDB)

## Description
Application To-Do List avec MERN stack : Ajout, affichage, update (complétée), suppression de tâches.

### Objectifs
- Backend : API CRUD avec Express et MongoDB.
- Frontend : React avec Axios pour consommer l'API.
- Intégration : CORS configuré, persistance des données.

## Prérequis
- Node.js, MongoDB (local ou Atlas).
- Backend : `cd backend && npm install`
- Frontend : `cd frontend && npm install`

## Installation et Lancement
1. Backend : `cd backend && node server.js`<a href="http://localhost:5000" target="_blank" rel="noopener noreferrer nofollow"></a>
2. Frontend : `cd frontend && npm start`<a href="http://localhost:3000" target="_blank" rel="noopener noreferrer nofollow"></a>

## Routes API
- GET /api/tasks : Liste tâches.
- POST /api/tasks : Ajout (body: {title}).
- PUT /api/tasks/:id : Update completed.
- DELETE /api/tasks/:id : Suppression.

## Tests (Screenshots)
- [Ajoutez via GitHub : ex. accueil.png, ajout.png, update.png, delete.png, postman-get.png]

## Améliorations Implémentées
- CRUD complet (au-delà du PDF basique).
- Gestion erreurs et validation basique.

## Auteur
- NASR BOUZAIDA