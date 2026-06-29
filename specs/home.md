# Testy Strony Domowej (Home Page) - localhost:3000

## Zakres
Weryfikacja poprawności wyświetlania strony domowej Rolnopol, w tym:
- Nagłówek i nawigacja
- Sekcja powitalna
- Statystyki ogólne
- Zaawansowane statystyki
- Call-to-action dla gości

## Założenia
- Strona dostępna pod URL: `/`
- Tytuł strony: `Rolnopol`
- Użytkownik niezalogowany (gość/visitor)
- Serwis statystyk dostępny pod `/api/v1/statistics`

## Preconditions
- Serwer działa na localhost:3000
- Endpoint `/api/v1/statistics` zwraca JSON z polami: users, farms, area, staff, animals

## Przypadki testowe

### TC-01: Wyświetlanie poprawnego tytułu
- **Scenariusz**: Wejdź na stronę główną
- **Oczekiwany rezultat**: Tytuł strony to "Rolnopol"

### TC-02: Nawigacja - linki w menu
- **Scenariusz**: Zalogowany niezalogowany użytkownik sprawdza menu
- **Oczekiwany rezultat**: Wszystkie linki nawigacyjne są widoczne:
  - Home
  - Alerts
  - Documentation
  - API Explorer
  - Start Free / Get Started Free
  - Sign In
  - Contact

### TC-03: Sekcja powitalna (Welcome section)
- **Scenariusz**: Wejdź na stronę główną
- **Oczekiwany rezultat**: 
  - Nagłówek "Welcome to Rolnopol" jest widoczny
  - Opis platformy jest wyświetlony

### TC-04: Statystyki ogólne - wyświetlanie
- **Scenariusz**: Wejdź na stronę główną
- **Oczekiwany rezultat**: Sekcja statystyk zawiera:
  - "Active Users" z liczbą lub "-"
  - "Managed Farms" z liczbą lub "-"
  - "Total Area (ha)" z liczbą lub "-"
  - "Total Staff" z liczbą lub "-"
  - "Stock Animals" z liczbą lub "-"

### TC-05: Statystyki - pobieranie danych
- **Scenariusz**: Wejdź na stronę główną
- **Oczekiwany rezultat**: Statystyki są pobierane z API i wyświetlane (lub pokazane "-" w razie błędu)

### TC-06: CTA dla gości (Call-to-action)
- **Scenariusz**: Wejdź na stronę główną jako niezalogowany użytkownik
- **Oczekiwany rezultat**: Sekcja CTA jest widoczna z przyciskami:
  - "Get Started Free" → /register.html
  - "Sign In" → /login.html

### TC-07: Linki CTA nawigują do właściwych stron
- **Scenariusz**: Kliknij przycisk "Get Started Free"
- **Oczekiwany rezultat**: Następuje nawigacja do /register.html

### TC-08: Easter egg - kliknięcie traktorika
- **Scenariusz**: Kliknij 7 razy w ikonę traktorika (js-secret-tractor)
- **Oczekiwany rezultat**: Następuje przekierowanie do /backend.html

## Notatki automatyzacyjne
- Używać `getByRole('link', { name: '...' })` dla linków nawigacyjnych
- Dla statystyk używać selektorów `#stat-users`, `#stat-farms`, etc.
- Testy CTA sprawdzają widoczność i poprawność href

## Handoff do implementacji
Testy mają wykorzystywać istniejący plik `tests/home.spec.ts`