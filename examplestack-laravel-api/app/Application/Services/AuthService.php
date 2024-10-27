<?php

namespace App\Application\Services;

use Illuminate\Support\Facades\Hash;
use App\Application\Contracts\Repositories\UserRepository;
use App\Application\DataTransferObjects\Auth\RegisterDto;

class AuthService extends AbstractService
{
    public function __construct(UserRepository $repository)
    {
        parent::__construct($repository);
    }

    /**
     * Create new user.
     *
     * @param  RegisterDto $dto
     * @return User
     */
    public function register(RegisterDto $dto)
    {
        $user = $this->repository->save([
            'name' => $dto->name,
            'username' => $dto->username,
            'email' => $dto->email,
            'password' => Hash::make($dto->password),
        ]);

        Auth::login($user);

        return $user;
    }
}
