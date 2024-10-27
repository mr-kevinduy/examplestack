<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Api\V1\V1Controller;
use App\Application\Services\AuthService;
use App\Http\Responses\ApiResponse;
use App\Http\Resources\UserResource;

class RegisterController extends V1Controller
{
    public function __construct(protected AuthService $authService) {}

    /**
     * Register new account.
     *
     * @param  RegisterRequest  $request
     * @return App\Http\Responses\ApiResponse
     */
    public function store(RegisterRequest $request)
    {
        $user = $authService->register($request);

        return ApiResponse::success(
            new UserResource($user)
        );
    }
}
