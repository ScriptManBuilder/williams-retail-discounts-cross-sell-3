# Styles Directory

Эта папка содержит все styled-components для проекта, организованные по компонентам.

## Структура

```
styles/
├── index.ts                    # Центральный экспорт всех стилей
├── Header.styles.ts            # Стили для Header компонента
├── HeroSection.styles.ts       # Стили для HeroSection компонента
├── FeaturesSection.styles.ts  # Стили для FeaturesSection компонента
├── StatsSection.styles.ts     # Стили для StatsSection компонента
├── CTASection.styles.ts       # Стили для CTASection компонента
└── Footer.styles.ts           # Стили для Footer компонента
```

## Принципы организации

### 1. Один файл стилей на компонент
Каждый компонент имеет свой отдельный файл стилей с суффиксом `.styles.ts`

### 2. Именование
- Файлы: `ComponentName.styles.ts`
- Styled-компоненты: PascalCase (например, `HeaderContainer`, `NavLink`)

### 3. Экспорты
Все styled-компоненты экспортируются напрямую из файла стилей:
```typescript
export const Container = styled.div`...`;
export const Title = styled.h1`...`;
```

### 4. Использование в компонентах
```typescript
import {
  HeaderContainer,
  Nav,
  Logo
} from '../styles/Header.styles';
```

## Преимущества этой структуры

✅ **Четкое разделение**: Логика компонента отделена от стилей  
✅ **Легкая навигация**: Быстро найти стили нужного компонента  
✅ **Переиспользование**: Стили можно импортировать в других местах  
✅ **Читаемость**: Меньше кода в компонентах, фокус на логике  
✅ **Масштабируемость**: Легко добавлять новые стили

## Соглашения о коде

### Медиа-запросы
Используйте стандартные breakpoints:
- Mobile: `@media (max-width: 768px)`
- Tablet: `@media (max-width: 1024px)`
- Desktop: `@media (min-width: 1025px)`

### Цвета
Основные цвета проекта (Travel Perks Purple Theme):
- Primary Purple: `#7C3AED`
- Deep Purple: `#6D28D9`
- Light Purple: `#C084FC`
- Dark Purple (bg): `#1E1B4B`
- Dark Purple (accent): `#4C1D95`
- Text: `#1a1a1a`
- Text Light: `#666`
- Background: `#f8f9fa`

### Анимации
Используйте consistent timing:
```css
transition: all 0.3s;
```
