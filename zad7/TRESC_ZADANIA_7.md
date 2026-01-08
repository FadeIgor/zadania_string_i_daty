# Zadanie 7: Generator haseł

## Cel zadania

Stwórz generator haseł używając metod obiektu String do manipulacji i generowania tekstu.

## Wymagania funkcjonalne

Aplikacja powinna umożliwiać użytkownikowi wprowadzenie słowa bazowego i liczby, a następnie wygenerować różne warianty haseł:

1. **Hasło podstawowe** - połączenie słowa bazowego z liczbą
2. **Hasło wielkimi literami** - hasło podstawowe zapisane wielkimi literami
3. **Hasło małymi literami** - hasło podstawowe zapisane małymi literami
4. **Hasło z odwróconym słowem** - słowo bazowe odwrócone + liczba
5. **Hasło powtórzone** - hasło podstawowe powtórzone 3 razy
6. **Pierwsze 3 znaki** - wyświetlić pierwsze 3 znaki hasła podstawowego
7. **Ostatnie 3 znaki** - wyświetlić ostatnie 3 znaki hasła podstawowego
8. **5 wariantów z numeracją** - wygenerować 5 wariantów hasła z dodaną na końcu cyfrą (1, 2, 3, 4, 5)

## Metody do wykorzystania

W rozwiązaniu należy użyć następujących metod obiektu String:

- `toUpperCase()`
- `toLowerCase()`
- `concat()` lub operator `+`
- `repeat()`
- `slice()` lub `substring()`
- `split()` i `join()` (do odwrócenia słowa)
- `length` (właściwość)

**Metody tablic:**

- `split()` (String -> Array)
- `reverse()` (do odwrócenia kolejności znaków)
- `join()` (Array -> String)

**Manipulacja DOM:**

- `getElementById()`
- `createElement()`, `appendChild()`
- `addEventListener()` (do obsługi zdarzeń)
- Atrybut `defer` w tagu `<script>` (opóźnia wykonanie skryptu do momentu załadowania DOM)

## Uwagi

- Należy obsłużyć przypadek, gdy użytkownik nie wprowadzi słowa bazowego lub liczby
- Do odwrócenia słowa użyj: `baseWord.split('').reverse().join('')`
- Do wyświetlenia pierwszych/ostatnich znaków użyj `slice()` lub `substring()`
- Do generowania wariantów użyj pętli `for` i dodawaj numerację na końcu hasła
- Interfejs użytkownika jest już przygotowany - należy uzupełnić funkcję `generatePasswords()` w pliku `zadanie_7.js`
- Należy dodać event listenery do przycisków używając `addEventListener()` (przyciski mają ID: `generateBtn` i `clearBtn`)
- Skrypt ma atrybut `defer`, więc można od razu używać `getElementById()` bez `DOMContentLoaded` - skrypt wykonuje się po załadowaniu DOM

## Przykładowe dane testowe

- **Słowo bazowe:** "haslo"
- **Liczba:** "123"
- **Oczekiwane wyniki:**
  - Hasło podstawowe: "haslo123"
  - Hasło wielkimi literami: "HASLO123"
  - Hasło małymi literami: "haslo123"
  - Hasło z odwróconym słowem: "olsah123"
  - Hasło powtórzone: "haslo123haslo123haslo123"
  - Pierwsze 3 znaki: "has"
  - Ostatnie 3 znaki: "123"
  - Warianty: "haslo1231", "haslo1232", "haslo1233", "haslo1234", "haslo1235"
