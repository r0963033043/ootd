# OOTD

A tiny "Outfit Of The Day" web app. It reads your location, shows the local weather for today and tomorrow, and lets you swipe through top / bottom / footwear options to pick a look.

## Live

<https://r0963033043.github.io/ootd>

Hosted on GitHub Pages from the `gh-pages` branch. The root `index.html` redirects to `today-dress.html`.

## Stack

- Plain HTML / CSS / JavaScript — no build step, no dependencies.
- [Open-Meteo](https://open-meteo.com/) for the weather forecast.
- [Nominatim](https://nominatim.openstreetmap.org/) for reverse geocoding the device's coordinates into a localized place name.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Redirects to `today-dress.html`. |
| `today-dress.html` | Main page: weather card + swipeable outfit picker. |
| `api.js` | URL builders for the Open-Meteo and Nominatim endpoints. |

## Features

- **Weather card** — today's current temperature plus high/low for today and tomorrow. Hover a temperature to see the actual reading vs. the "feels like" value.
- **Rain forecast** — chance of rain and expected amount per day.
- **Outfit suggestion** — short hint based on temperature and weather code.
- **Swipeable picker** — drag, swipe, or use arrows to cycle top / bottom / footwear.
- **Localized place names** — shows the place name in the local language with the English name as a tooltip.
