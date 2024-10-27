<?php

namespace App\Application\Repositories\Eloquent;

use App\Models\User;
use App\Application\Contracts\Repositories\UserRepository;

class UserRepositoryEloquent extends AbstractRepositoryEloquent implements UserRepository
{
    public function __construct(User $user)
    {
        parent::__construct($user);
    }

    public function getUserByEmail($email, $columns = ['*'])
    {
        return $this->getByIndex('email', $email, $columns);
    }

    public function getUserByUsername($username)
    {
        return $this->getByIndex('username', $username, $columns);
    }
}
