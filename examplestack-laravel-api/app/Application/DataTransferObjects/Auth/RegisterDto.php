<?php

namespace App\Application\DataTransferObjects\Auth;

use App\Http\Requests\Auth\RegisterRequest;

readonly class RegisterDto
{
    public function __construct(
        protected string $name,
        protected string $username,
        protected string $email,
        protected string $password
    ) {}

    public static function fromRequest(RegisterRequest $request)
    {
        return new seft(
            name: $request->validated('name'),
            username: $request->validated('username'),
            email: $request->validated('email'),
            password: $request->validated('password')
        );
    }
}
