# Full Stack Rendezvényszervező Alkalmazás – Laravel + Vue 3 (Szakdolgozati Projekt)

Ez a projekt egy webalapú rendezvényszervező rendszer, amely Laravel (backend) és Vue 3 (frontend) technológiákra épül. A cél egy zárt rendszerű, biztonságos és modern felület fejlesztése, amely támogatja az ügyfelek ajánlatkérését, a szervezők adminisztrációját, valamint a felhasználók hitelesítését és jogosultságkezelését.

## Tartalomjegyzék

- [Technológiák](#technológiák)
- [Funkciók](#funkciók)
- [Projekt struktúra](#projekt-struktúra)
- [Telepítés](#telepítés)
- [Használat](#használat)
- [Tesztfelhasználó](#tesztfelhasználó)
- [Mérföldkövek](#mérföldkövek)
- [Fejlesztői információk](#fejlesztői-információk)

---

## Technológiák

- **Frontend**: Vue 3 (Vite), Composition API, Tailwind CSS
- **Backend**: Laravel 10, REST API, PHP 8+
- **Adatbázis**: MySQL / SQLite, Redis cache (tervezett)
- **Autentikáció**: JSON Web Token (JWT), szerepkör alapú jogosultságkezelés
- **AI funkciók (tervezett)**: eseményajánló, ügyfélszolgálati chatbot
- **Fizetés (tervezett)**: Stripe / PayPal integráció
- **Gamifikáció (tervezett)**: aktivitás alapú pontgyűjtés, VIP modellek

---

## Funkciók

- 🏠 **Főoldal**: események listázása, bemutatkozás, ajánlatkérés
- 👤 **Felhasználókezelés**: regisztráció, JWT-es bejelentkezés, admin/szervező/ügyfél szerepek
- 📅 **Eseménykezelés**: események létrehozása, ajánlatok kezelése
- 🧠 **AI modulok** *(tervezés alatt)*: eseményajánlás, chatbot
- 💳 **Fizetés** *(tervezés alatt)*: Stripe / PayPal, VIP előfizetés
- 🎮 **Hűségprogram** *(tervezés alatt)*: aktivitás alapú kedvezmények

---

## Projekt struktúra

```
project-root/
├── backend/         # Laravel alkalmazás
├── frontend/        # Vue 3 alkalmazás
├── README.md        # Ez a fájl
```

---

## Telepítés

### Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
php artisan serve
```

### Frontend (Vue 3)

```bash
cd frontend
npm install
npm run dev
```

---

## Használat

1. Indítsd el a backendet: `php artisan serve`
2. Indítsd el a frontendet: `npm run dev`
3. Nyisd meg a böngészőt: `http://localhost:5173`
4. Jelentkezz be a megadott tesztfelhasználóval

---

## Tesztfelhasználó

- **Email**: `teszt@example.com`
- **Jelszó**: `jelszo123`

(ha nem jönne létre automatikusan, futtatható: `php artisan db:seed`)

---

## Mérföldkövek

| Feladat                         | Kezdete      | Vége         |
|----------------------------------|--------------|--------------|
| Projekttervezés, drótváz        | 2025-05-01   | 2025-05-15   |
| Frontend fejlesztés             | 2025-05-16   | 2025-06-30   |
| Backend fejlesztés              | 2025-07-01   | 2025-08-15   |
| Rendszerintegráció, tesztelés   | 2025-08-16   | 2025-09-15   |
| Hostolás, hibajavítás           | 2025-09-16   | 2025-10-01   |
| Dokumentáció készítése          | 2025-10-02   | 2025-11-10   |
| Végső ellenőrzés, beadás        | 2025-11-11   | 2025-12-01   |

---

## Fejlesztői információk

- Készítette: **Gyimóthy Tamás**
- Szak: Programtervező Informatikus
- Fejlesztési cél: gyakorlati szakdolgozat a rendezvényszervezés digitális támogatására
- Platform: Windows, Laravel + Vite dev szerver
- Cél: jól strukturált, bővíthető rendszer, modern UI és token alapú jogosultság

---

## Licenc

Ez a projekt oktatási célra készült. Nincs éles környezetre optimalizálva.