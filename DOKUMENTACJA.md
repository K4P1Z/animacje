# Dokumentacja - Komponenty Animacji w Angularze

## 1. Czym jest Komponent?

Komponent w Angularze to klasa TypeScript, która:
- Kontroluje wygląd i zachowanie części strony internetowej
- Komunikuje się z szablonami HTML
- Zarządza danymi i zdarzeniami

## 2. Struktura Komponentu

Każdy komponent składa się z 4 plików:

### 📄 Plik TypeScript (np. `animacja1.ts`)
Zawiera logikę komponentu - co się dzieje, gdy coś się kliknie, jakie są dane, itd.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja1',      // Nazwa HTML elementu
  standalone: false,               // Czy komponent jest samodzielny
  templateUrl: './animacja1.html', // Plik HTML
  styleUrl: './animacja1.css',     // Plik CSS
})
export class Animacja1 {
  // Dane
  nazwaAnimacji: string = "Animacja 1";
  nazwaEfektuAnimacji: string = "Move X Axis";
  foto: string = "public/gato1.jpeg";
  
  // Stan - czy efekt jest aktywny?
  transform: boolean = false;

  // Metoda - co się dzieje przy klikięciu
  togglTransform() {
    this.transform = !this.transform;  // Zmienia false na true i odwrotnie
  }
}
```

**Ważne pojęcia:**
- `@Component` - dekorator, mówi, że to jest komponent
- `selector` - nazwa tagu HTML, którą będziemy używać
- `templateUrl` - ścieżka do pliku HTML
- `styleUrl` - ścieżka do pliku CSS
- Zmienne (properties) - przechowują dane
- Metody (functions) - wykonują akcje

### 📋 Plik HTML (np. `animacja1.html`)
Wygląd strony - co użytkownik widzi

```html
<h1>Animacja Jeden Manchen</h1>

<p>Nazwa Animacji: {{nazwaAnimacji}}</p>
<p>Nazwa Efektu: {{nazwaEfektuAnimacji}}</p>

<img 
    [src]="foto"
    alt="fotografia 1"
    class="zdjecia"
    [class.transform]="transform"
    (click)="togglTransform()"
/>

<p>Kliknij na zdjęcie, aby move axis</p>
```

**Ważne pojęcia w HTML:**
- `{{nazwaAnimacji}}` - interpolacja, wyświetla wartość zmiennej z TypeScript
- `[src]="foto"` - property binding, przypisuje wartość zmiennej do atrybutu
- `[class.transform]="transform"` - class binding, dodaje klasę CSS gdy `transform` jest true
- `(click)="togglTransform()"` - event binding, wywołuje metodę przy klikięciu

### 🎨 Plik CSS (np. `animacja1.css`)
Styl - jak wygląda grafika i animacje

```css
.zdjecia {
    width: 300px;
    height: auto;
    cursor: pointer;
    transition: transform 0.4s ease;
}

.zdjecia.transform {
    transform: TranslateX(1000px);  /* Przesuwa zdj. o 1000px w prawo */
}
```

**Ważne pojęcia:**
- `.zdjecia` - styl dla wszystkich obrazków
- `.zdjecia.transform` - styl gdy CLASS zawiera "transform"
- `transition` - animacja (gładkie przejście)
- `transform` - zmiana wyglądu (przesunięcie, obrót, skalowanie)

### 🧪 Plik Spec (np. `animacja1.spec.ts`)
Testy - sprawdzają czy komponent działa prawidłowo (zaawansowane, na razie możemy zignorować)

## 3. Jak Działają Nasze Animacje?

### Krok 1: Użytkownik klika na zdjęcie
```html
(click)="togglTransform()"
```

### Krok 2: Zmieniamy wartość `transform`
```typescript
togglTransform() {
    this.transform = !this.transform;  // true → false lub false → true
}
```

### Krok 3: HTML reaguje na zmianę
```html
[class.transform]="transform"
```
Gdy `transform` jest `true`, dodawana jest klasa CSS o nazwie "transform"

### Krok 4: CSS animuje zdjęcie
```css
.zdjecia.transform {
    transform: TranslateX(1000px);  /* Zdj. się przesuwa */
    transition: 0.4s ease;           /* Animacja trwa 0.4s */
}
```

## 4. Nasze 10 Efektów Animacji

| Komponent | Efekt | CSS Transform |
|-----------|-------|---------------|
| Animacja 1 | Przesunięcie w prawo | `translateX(1000px)` |
| Animacja 4 | Obrót 360° | `rotate(360deg)` |
| Animacja 5 | Powiększenie | `scale(2)` |
| Animacja 6 | Przekrzywienie | `skewX(20deg)` |
| Animacja 7 | Zmiana przezroczystości | `opacity: 0.1` |
| Animacja 8 | Obrót 3D | `rotateY(180deg)` |
| Animacja 9 | Rozmycie | `filter: blur(10px)` |
| Animacja 10 | Odbicie (Bounce) | `translateY(-100px)` + animation |
| Animacja 11 | Przesunięcie w górę | `translateY(-200px)` |
| Animacja 12 | Trzęsienie | `shake` - keyframe animation |
| Animacja 13 | Pulsowanie | `pulse` - keyframe animation |

## 5. Generowanie Komponentu - Polecenie ng generate

```bash
ng g c components/animacja4
```

To polecenie automatycznie tworzy:
- `animacja4.ts` - logika
- `animacja4.html` - szablon HTML
- `animacja4.css` - style
- `animacja4.spec.ts` - testy

Angular automatycznie dodaje nowy komponent do `app-module.ts`

## 6. Routing - Jak się Poruszać Między Stronami

Plik: `app-routing-module.ts`

```typescript
const routes: Routes = [
  {path: "",              component: Start},       // localhost:4200/
  {path: "animacja1",     component: Animacja1},   // localhost:4200/animacja1
  {path: "animacja2",     component: Animacja2},   // localhost:4200/animacja2
];
```

Każdy route mapuje ścieżkę URL do komponentu.

## 7. Linki Nawigacyjne - app.html

```html
<a routerLink="animacja1" routerLinkActive="active">
  Animacja 1
</a>
```

- `routerLink="animacja1"` - ścieżka do komponentu
- `routerLinkActive="active"` - dodaje klasę CSS gdy link jest aktywny
- `<router-outlet />` - tutaj Angular wyświetla wybrany komponent

## 8. Data Binding - Komunikacja TypeScript ↔ HTML

### Interpolacja (TS → HTML)
```typescript
nazwaAnimacji: string = "Animacja 1";
```
```html
<p>{{nazwaAnimacji}}</p>  <!-- Wyświetla: Animacja 1 -->
```

### Property Binding (TS → HTML Atrybut)
```typescript
foto: string = "public/gato1.jpeg";
```
```html
<img [src]="foto" />  <!-- src = "public/gato1.jpeg" -->
```

### Class Binding (TS → HTML Klasa)
```typescript
transform: boolean = false;
```
```html
<img [class.transform]="transform" />
<!-- Gdy transform=true, dodaj klasę "transform" -->
```

### Event Binding (HTML Event → TS Metoda)
```typescript
togglTransform() {
    this.transform = !this.transform;
}
```
```html
<img (click)="togglTransform()" />  <!-- Klikięcie → metoda -->
```

## 9. Przydatne Polecenia

```bash
# Uruchomić aplikację
npm start

# Generować nowy komponent
ng g c components/nazwaKomponentu

# Uruchomić testy
npm test

# Zbudować do produkcji
ng build
```

## 10. Najczęstsze Błędy i Rozwiązania

### Błąd: "Cannot find module './components/animacja5/animacja5'"
**Przyczyna:** Komponent nie istnieje lub jest źle zaimportowany
**Rozwiązanie:** 
- Sprawdź czy folder komponentu istnieje
- Sprawdź czy nazwa jest poprawna
- Sprawdź czy komponent jest w `app-module.ts`

### Błąd: "router-outlet is not a known element"
**Przyczyna:** Router nie jest zaimportowany
**Rozwiązanie:** Dodaj `RouterModule` do imports w `app-module.ts`

### Animacja się nie pojawia
**Przyczyna:** Brak CSS lub zdjęcia
**Rozwiązanie:**
- Sprawdź czy `.css` plik jest przypisany w komponentcie
- Sprawdź czy ścieżka do zdjęcia jest poprawna

## 11. Podsumowanie - Flow Aplikacji

```
1. Użytkownik wchodzi na http://localhost:4200/animacja1
   ↓
2. Router wybiera komponent Animacja1
   ↓
3. Angular ładuje szablon HTML (animacja1.html)
   ↓
4. HTML wyświetla dane z TypeScript (interpolacja, bindingi)
   ↓
5. CSS styluje komponenty
   ↓
6. Użytkownik klika na zdjęcie
   ↓
7. Metoda togglTransform() zmienia wartość transform
   ↓
8. HTML reaguje na zmianę (dodaje/usuwa klasę CSS)
   ↓
9. CSS animuje zmianę
   ↓
10. Zdjęcie animuje się! 🎉
```

---

**Autor:** GitHub Copilot
**Data:** 2 lutego 2026
**Temat:** Komponenty Animacji w Angularze - Dokumentacja Podstawowa
