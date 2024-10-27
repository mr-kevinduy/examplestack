<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;

class ApplicationServiceProvider extends ServiceProvider
{
    protected array $repositories = [
        'User',
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Register repositories.
     *
     * @param  array  $repositories
     * @return void
     */
    private function registerRepository(?array $repositories = [])
    {
        foreach ($repositories as $key => $repository) {
            $repositoryContract = 'App\Application\Contracts\Repositories\\'.ucfirst($repository).'Repository';
            $repositoryConcrete = 'App\Application\Repositories\Eloquent\\'.ucfirst($repository).'RepositoryEloquent';

            if (! interface_exists($repositoryContract) || ! class_exists($repositoryConcrete)) {
                Log::warning(__('messages.WARN_5000', [
                    'repository' => $repository,
                    'contract' => $repositoryContract,
                    'concrete' => $repositoryConcrete
                ]));

                continue;
            }

            $this->app->singleton($repositoryContract, $repositoryConcrete);
        }
    }
}
