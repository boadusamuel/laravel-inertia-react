<p align="center">
  <a href="#"><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/57ge2v8fp17lcd8vmf1a.png" width="400" alt="LaraReact"></a>
</p>

## About LaraReact Dashboard Template (Laravel 10)

LaraReact Dashboard Template is a Laravel Inertia and React-based web application template designed with inspiration from [Sakai PrimeReact](https://sakai.primereact.org/) for creating modern and interactive dashboard applications. This template provides you with a solid foundation for building powerful web applications with features such as:

- [Laravel-based backend](https://laravel.com)
- [Inertia.js](https://inertiajs.com) for seamless SPA development
- [React](https://reactjs.org) for creating dynamic user interfaces
- [PrimeReact](https://www.primefaces.org/primereact) UI components for a polished look and feel
- [Sakai-react](https://github.com/primefaces/sakai-react) Free React Admin Template CSS
- [Vite](https://vitejs.dev/) for faster development experience

LaraReact Dashboard Template is aimed at Laravel developers who want to kickstart their project development with a ready-made template that incorporates these technologies.

## Getting Started

To get started with LaraReact Dashboard Template first clone the [LaraReact Dashboard Template](https://github.com/boadusamuel/laravel-inertia-react) repository.

**Clone Repository:**
   ```bash
   git clone https://github.com/boadusamuel/laravel-inertia-react
   ```

## Frontend
```shell
$ npm install
$ npm run dev
```

## Backend
```shell
$ cp .env.example .env
$ composer install
$ php artisan key:generate
$ php artisan serve
```

# Project Settings

The `AppConfig` component is a React component designed to provide a user interface for configuring the layout settings of the project. It utilizes the PrimeReact library for UI components and leverages context provided by the `LayoutContext` and `PrimeReactContext` to manage and apply configuration changes.


## Table of Contents

- [Usage: Accessing AppConfig Button on the Dashboard](#usage-accessing-appconfig-button-on-the-dashboard)
- [Configuration Options](#configuration-options)
    - [Scale](#scale)
    - [Menu Type](#menu-type)
    - [Input Style](#input-style)
    - [Ripple Effect](#ripple-effect)
    - [Themes](#themes)
- [Usage: Applying Selected Theme to App.blade.php](#usage-applying-selected-theme-to-appbladephp)


Usage: Accessing AppConfig Button on the Dashboard
--------------------------------------------------

The `AppConfig` component provides a convenient way to access and customize the layout settings directly from the dashboard interface. Follow these steps to utilize the AppConfig button:

1.  Navigate to the Dashboard:

2.  Locate AppConfig Button:

    -   Look for the configuration button represented by a cog icon typically positioned on the right center of the screen.
3.  Click the AppConfig Button:

    -   Once you've located the AppConfig button, click on it to open the configuration sidebar.
4.  Adjust Configuration Options:

    -   The sidebar will reveal various configuration options:
        -   Scale: Adjust the font size of the application.
        -   Menu Type: Choose between "Static" and "Overlay" menu types.
        -   Input Style: Select between "Outlined" and "Filled" input styles.
        -   Ripple Effect: Toggle the ripple effect on user interactions.
        -   Themes: Choose from a variety of themes categorized by design systems (Bootstrap, Material Design, etc.).
5.  Preview Changes:

    -   Visualize the changes in real-time as you adjust the configuration options.
6.  Apply Theme:

    -   For theme changes, click on the theme button of your choice to apply the selected theme and color scheme to the entire application.
7.  Close AppConfig Sidebar:

    -   After configuring the settings, you can close the AppConfig sidebar by clicking outside the sidebar or using any provided close button.

Configuration Options
---------------------

The `AppConfig` component provides a sidebar with various configuration options that can be adjusted to customize the project's layout and appearance. These options include:

### Scale

The "Scale" section allows users to adjust the font size of the application. Users can increment or decrement the scale and visualize the changes in real-time.

### Menu Type

The "Menu Type" section provides options to select the layout's menu mode. Users can choose between "Static" and "Overlay" menu types, influencing the navigation experience.

### Input Style

The "Input Style" section lets users choose between "Outlined" and "Filled" input styles, influencing the appearance of input fields in the application.

### Ripple Effect

The "Ripple Effect" section includes a toggle switch to enable or disable the ripple effect on user interactions.

### Themes

The "Themes" section categorizes available themes into different design systems:

-   Bootstrap
-   Material Design
-   Material Design Compact
-   Tailwind
-   Fluent UI
-   PrimeOne Design - 2022
-   PrimeOne Design - 2021

For each design system, multiple theme options are provided, each represented by a button with a preview image. Clicking on a theme button applies the selected theme and color scheme to the application.

Feel free to explore and customize these options according to the desired look and feel of the "use client" project.


Usage: Applying Selected Theme to App.blade.php
-----------------------------------------------

Once you have chosen a preferred theme, follow these steps to integrate the selected theme into the `app.blade.php` file:

1.  Choose a Theme:

    -   Using the AppConfig sidebar, select your preferred theme from the available options.

2. Navigate to app.blade.php:

    -   Locate the `app.blade.php` file in your project's `resources/views` directory.
3. Paste Link in Head Section:

    -   Open the `app.blade.php` file and locate the `<head>` section.
    -   Paste the `<link>` tag with `id="theme-css"` within the `<head>` section. It should look something like this with your selected theme:


```html
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'LaraReact') }}</title>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <link id="theme-css" href={{asset('/themes/lara-light-indigo/theme.css')}} rel="stylesheet"></link>
    </head>
    <body class="font-sans antialiased">
        @inertia
</body></html>
```

4. Set the Chosen theme inside the `LayoutProvider` within the `layoutcontext` component 
```jsx
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'tailwind-light',
        scale: 14
    });
```

4. Delete Unwanted Themes:

    -   In the public directory, navigate to the `images/layout/themes` folder.
    -   Delete the CSS files of the themes you no longer need. This step helps in keeping your project clean and reduces unnecessary file clutter.
5. Save Changes:

    -   Save the changes to the `app.blade.php` file.

By following these steps, you have successfully integrated the selected theme into the main layout of your application. Remember to clean up the unwanted themes to maintain a tidy project structure.

**NB: This project is still under development please report any bugs to the issue section of this repo**
