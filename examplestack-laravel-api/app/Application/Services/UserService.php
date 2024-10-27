<?php

namespace App\Application\Services;

use App\Application\Contracts\Repositories\UserRepository;

class UserService extends AbstractService
{
    public function __construct(UserRepository $repository)
    {
        parent::__construct($repository);
    }
}
