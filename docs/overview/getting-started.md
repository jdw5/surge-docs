# Getting Started

Welcome to the **Surge documentation**.

The project is a boilerplate using Laravel, Vue.js, Inertia.js and TailwindCSS. It includes Laravel Jetstream for authentication scaffolding, and uses Radix Vue components for the UI. It is an opinionated setup, but is feature-complete and provides options for handling the vast majority of tasks needed in web development.

## Installation
### Clone repo
To install the project, clone the repository from Github.

```console
git clone https://github.com/jdw5/surge.git [PROJECT-NAME]
```

### Install composer
Go into the project and ensure composer is installed.

```console
cd [PROJECT-NAME]
composer install
```

### Create .env file
Copy the environment file

```console
cp .env.example .env
```

It is recommended to modify the environment file at this stage. Set your `APP_NAME` to your choosing, and rename the database if needed at `DB_DATABASE`.
By default, Surge uses `MySQL` as the database driver - if you want to change it, do so at this stage by changing the `DB_CONNECTION`.

### Generate app key
Generate the application key.

```console
php artisan key:generate
```

### Run migrations
Ensure your database is set up with the correct driver and name. If you are using Sail, check out (this section)[#sail] for more information.

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=root
DB_PASSWORD=
```

Once set, migrate the database:
    
```console
php artisan migrate
```

### Run Local Server
Run the server locally.

```console
php artisan serve
```

### Install NPM 
Install the NPM dependencies.

```console
npm install
```

And compile the assets through hot module reloading using Vite.
```console
npm run dev
```

### Unlink GitHub and Set Remote
As the repository was cloned, it is linked to the original repository. To unlink it, remove the remote and set it to your own repository.

```console
git remote remove origin
git remote add origin [YOUR-REPO]
```

Then push the changes to your repository from the root directory.

```console
git add .
git commit -m "New project"
git push -u origin main
```


## Sail
If you are developing on Windows, using Sail is the recommended way to manage dependencies. To get started, ensure you have Docker Desktop installed. 
Install Laravel sail into your project, as it is already shipped with Laravel by default.

```console
php artisan sail:install
```

Select the containers you want to use - for a basic setup, you can use MySQL and Redis. Once completed, you can start the containers.

```console
./vendor/bin/sail up -d
```

Instead of using `php artisan` for commands, instead use the containerised version via `sail artisan`. This applies for migrations and other commands.