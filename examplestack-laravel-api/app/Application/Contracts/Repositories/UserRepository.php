<?php

namespace App\Application\Contracts\Repositories;

interface UserRepository
{
    public function getUserByEmail();
    public function getUserByUsername();
}
