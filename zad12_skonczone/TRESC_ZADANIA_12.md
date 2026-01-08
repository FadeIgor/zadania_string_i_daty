# Zadanie 12: Konwerter i kalkulator dat

## Cel zadania

Stwórz aplikację do konwersji dat i obliczania różnic między datami używając metod obiektu Date w JavaScript.

## Wymagania funkcjonalne

Aplikacja powinna umożliwiać użytkownikowi wprowadzenie daty (dzień, miesiąc, rok), a następnie wykonać następujące operacje:

1. **Wyświetlenie daty w różnych formatach** - wyświetlić datę w formatach: DD.MM.YYYY, YYYY-MM-DD oraz pełnym formacie tekstowym (np. "15 marca 2024")
2. **Określenie dnia tygodnia** - wyświetlić nazwę dnia tygodnia dla wprowadzonej daty
3. **Różnica w dniach** - obliczyć i wyświetlić różnicę w dniach między wprowadzoną datą a dzisiejszą datą
4. **Określenie relacji czasowej** - sprawdzić czy wprowadzona data jest w przeszłości czy przyszłości względem dzisiaj
5. **Komunikat informacyjny** - wyświetlić komunikat informujący ile dni minęło lub pozostało do wprowadzonej daty

## Metody do wykorzystania

W rozwiązaniu należy użyć następujących metod obiektu Date:

- `new Date()` - utworzenie obiektu reprezentującego aktualną datę
- `new Date(rok, miesiąc, dzień)` - utworzenie obiektu reprezentującego konkretną datę (uwaga: miesiąc od 0 do 11)
- `getFullYear()` - pobranie roku
- `getMonth()` - pobranie miesiąca (0-11)
- `getDate()` - pobranie dnia miesiąca
- `getDay()` - pobranie dnia tygodnia (0-6)
- `getTime()` - pobranie wartości timestamp (liczba milisekund od 1 stycznia 1970)
- `toLocaleDateString()` - konwersja daty na string w formacie lokalnym

**Manipulacja DOM:**

- `getElementById()`
- `addEventListener()` (do obsługi zdarzeń)
- Atrybut `defer` w tagu `<script>` (opóźnia wykonanie skryptu do momentu załadowania DOM)

## Uwagi

- Przy tworzeniu daty z konkretnych wartości, miesiąc jest liczony od 0 (styczeń = 0, luty = 1, itd.)
- Do obliczenia różnicy w dniach między dwiema datami można użyć metody `getTime()` - różnica w milisekundach podzielona przez liczbę milisekund w dniu (1000 * 60 * 60 * 24)
- Należy sprawdzić czy wprowadzona data jest poprawna (np. czy dzień nie przekracza liczby dni w miesiącu - JavaScript automatycznie obsłuży to, ale warto sprawdzić czy utworzona data ma oczekiwane wartości)
- Należy obsłużyć przypadek, gdy użytkownik nie wprowadzi wszystkich wartości
- Wartości mogą być jednocyfrowe - należy dodać zero z przodu dla formatu DD.MM.YYYY
- Należy utworzyć tablice z nazwami dni tygodnia i miesięcy
- Interfejs użytkownika jest już przygotowany - należy uzupełnić funkcję `convertAndCalculate()` w pliku `zadanie_12.js`
- Należy dodać event listenery do przycisków używając `addEventListener()` (przyciski mają ID: `convertBtn` i `clearBtn`)
- Skrypt ma atrybut `defer`, więc można od razu używać `getElementById()` bez `DOMContentLoaded` - skrypt wykonuje się po załadowaniu DOM
- W stopce strony należy uzupełnić pola z imieniem, nazwiskiem i klasą
- W sekcji `<head>` należy uzupełnić znaczniki `<meta>` z informacjami o autorze (imię, nazwisko, klasa)

## Przykładowe dane testowe

- **Wejście:** Dzień: 15, Miesiąc: 3, Rok: 2024
- **Oczekiwane wyniki:**
  - Format DD.MM.YYYY: "15.03.2024"
  - Format YYYY-MM-DD: "2024-03-15"
  - Format pełny: "15 marca 2024"
  - Dzień tygodnia: "Piątek" (jeśli 15 marca 2024 to piątek)
  - Różnica w dniach: zależy od aktualnej daty
  - Relacja czasowa: "Przeszłość" lub "Przyszłość"
  - Komunikat: "Do tej daty pozostało X dni" lub "Od tej daty minęło X dni"

