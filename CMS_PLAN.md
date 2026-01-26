# CMS Plan: Payload + Cloudinary + Railway

## Выбранный стек

| Компонент | Решение | Стоимость |
|-----------|---------|-----------|
| CMS | Payload CMS | Бесплатно (open-source) |
| Хранение фото | Cloudinary | Бесплатно до 25GB |
| Хостинг | Railway | $5/мес (Hobby план) |
| База данных | PostgreSQL на Railway | Включено в план |

**Итого: ~$5/мес**

---

## Почему этот выбор

### Payload CMS
- Open-source, бесплатно
- Встраивается прямо в Next.js проект
- TypeScript из коробки
- Встроенная оптимизация изображений
- Один сервер = сайт + CMS

### Cloudinary
- Бесплатно 25GB (~5,000-10,000 фото для веба)
- Фото не теряются при редеплое
- Автоматическая оптимизация (WebP, ресайз)
- CDN — быстрая загрузка по всему миру

### Railway
- Всё в одном месте (код + база + деплой)
- PostgreSQL включён
- Нет cold start (быстрее Vercel)
- Простой деплой через Git

---

## Пошаговый план интеграции

### Этап 1: Локальная установка

```bash
npm install payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical sharp
```

Создать файлы:
- `payload.config.ts` — настройки CMS
- `collections/Projects.ts` — структура проектов
- `collections/Media.ts` — для фотографий

### Этап 2: Настройка Cloudinary

```bash
npm install @payloadcms/plugin-cloud-storage
```

Зарегистрироваться на cloudinary.com и получить ключи.

### Этап 3: Локальное тестирование

```bash
npm run dev
```

- `localhost:3000` — сайт
- `localhost:3000/admin` — админка Payload

### Этап 4: Деплой на Railway

1. Создать проект на railway.app
2. Подключить GitHub репозиторий
3. Добавить PostgreSQL
4. Настроить переменные окружения
5. Деплой

### Этап 5: Продакшен

- Админка: `your-site.railway.app/admin`
- Загрузка проектов и фото через админку
- Фото автоматически идут в Cloudinary

---

## Структура данных для проектов

```typescript
// collections/Projects.ts
{
  slug: 'projects',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    { name: 'category', type: 'select', options: ['Residential', 'Commercial', 'Hospitality', 'Furniture', 'Turnkey Projects', 'Concepts'] },
    { name: 'gallery', type: 'array', fields: [
      { name: 'image', type: 'upload', relationTo: 'media' },
      { name: 'caption', type: 'text' }
    ]},
    { name: 'year', type: 'number' },
    { name: 'location', type: 'text' },
    { name: 'client', type: 'text' },
    { name: 'area', type: 'text' }
  ]
}
```

---

## Лимиты и масштабирование

| Ресурс | Бесплатный лимит | Если превысить |
|--------|------------------|----------------|
| Cloudinary | 25 GB | Backblaze B2 (~$1/мес за 200GB) |
| Railway | $5/мес включено | Доплата по использованию |
| PostgreSQL | Включено в Railway | — |

25GB Cloudinary = ~5,000-10,000 фото (достаточно на годы)

---

## Статус

**ОТЛОЖЕНО** — Payload CMS 3.73 имеет проблемы совместимости с Next.js 16 (Turbopack).

Вернуться когда:
- Payload обновится для поддержки Next.js 16
- Или использовать Strapi как альтернативу

- [ ] Установка Payload
- [ ] Настройка коллекций
- [ ] Подключение Cloudinary
- [ ] Локальное тестирование
- [ ] Деплой на Railway
- [ ] Миграция контента
